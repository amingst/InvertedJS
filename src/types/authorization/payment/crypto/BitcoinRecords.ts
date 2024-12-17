export type BitcoinSubscriptionRecord = {
    UserID: string;
    CurrentLevel: number;
    CreatedOnUTC: string;
    AddressNumber: number;
    Address: string;
}

export type BitcoinPaymentHistoryRecord = {
    UserID: string;
    TransactionID: string;
    Address: string;
    ConfirmedOnUTC: string;
    Satoshis: number;
    Level: number;
    SecondsPaid: number;
}