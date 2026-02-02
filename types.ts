
export enum TransactionType {
  INCOME = 'RECEITA',
  EXPENSE = 'DESPESA'
}

export enum ServiceType {
  CUT = 'Corte',
  SCISSOR_CUT = 'Corte na Tesoura',
  BEARD = 'Barba',
  EYEBROW = 'Sobrancelha',
  HAIRLINE = 'Pezinho',
  PIGMENTATION = 'Pigmentação',
  RELAXING = 'Relaxamento',
  CUT_BEARD = 'Corte + Barba',
  CUT_EYEBROW = 'Corte + Sobrancelha',
  CUT_BEARD_EYEBROW = 'Corte + Barba + Sobrancelha',
  CUT_FREESTYLE = 'Corte + Freestyle',
  OTHERS = 'Outros'
}

export enum Category {
  SERVICE = 'Serviço',
  PRODUCT = 'Produto',
  VARIABLE_EXPENSE = 'Despesa Variável',
  GENERAL_EXPENSE = 'Gasto Geral',
  MAINTENANCE = 'Manutenção',
  RENT = 'Aluguel'
}

export interface Transaction {
  id: string;
  date: string; // ISO String
  type: TransactionType;
  category: Category;
  value: number;
  description: string;
  customerName?: string;
  notes?: string;
  relatedId?: string;
}

export interface Product {
  id: string;
  name: string;
  purchaseDate: string;
  endDate?: string;
  value: number;
  description?: string;
}

export type ViewType = 'DASHBOARD' | 'CUT' | 'INVENTORY' | 'EXPENSES' | 'REPORTS' | 'STATEMENT' | 'SETTINGS';

export type DateFilter = 'TOTAL' | 'TODAY' | 'WEEK' | 'MONTH';

export type Theme = 'light' | 'dark';
