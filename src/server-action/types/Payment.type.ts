export interface Payment {
    billCode: string;
    amount: number;
    token: string;
    snapUrl: string;
    status: string;
    username: string;
    appointmentId: number;
}
export interface checkTransactionPerDay {
    orderId: string;
}
export interface updateTransaction{
    paymentId: number;
    status: string;
}
export interface getallTransaction{
    appointmentId: number;
}