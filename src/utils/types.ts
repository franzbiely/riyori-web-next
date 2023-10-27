export interface i_TransactionItem {
  customer_name: any;
  branchId: number;
  createdAt: Date;
  id: number;
  quantity: number;
  status: string;
  menuItem: {
    title: string;
  };
}
