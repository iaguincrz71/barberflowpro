
import { format, isToday, isWithinInterval, startOfWeek, endOfWeek, startOfMonth, endOfMonth, parseISO } from 'date-fns';
import { Transaction, DateFilter, TransactionType } from './types';

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

export const filterTransactionsByDate = (
  transactions: Transaction[],
  filter: DateFilter
): Transaction[] => {
  const now = new Date();
  
  return transactions.filter(t => {
    const tDate = parseISO(t.date);
    
    switch (filter) {
      case 'TODAY':
        return isToday(tDate);
      case 'WEEK':
        return isWithinInterval(tDate, {
          start: startOfWeek(now, { weekStartsOn: 1 }),
          end: endOfWeek(now, { weekStartsOn: 1 })
        });
      case 'MONTH':
        return isWithinInterval(tDate, {
          start: startOfMonth(now),
          end: endOfMonth(now)
        });
      case 'TOTAL':
      default:
        return true;
    }
  });
};

export const groupTransactionsByCategory = (transactions: Transaction[]) => {
  const grouped: Record<string, number> = {};
  transactions
    .filter(t => t.type === TransactionType.INCOME)
    .forEach(t => {
      const label = t.description;
      grouped[label] = (grouped[label] || 0) + t.value;
    });
  
  return Object.entries(grouped).map(([name, value]) => ({ name, value }));
};
