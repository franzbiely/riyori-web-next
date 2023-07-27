export interface i_TransactionItem {
    branchId:  number,
    createdAt: Date,
    id: number,
    quantity: number,
    status: string,
    menuItem:  {
        title: string
    }
}