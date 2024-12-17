import { BitcoinPaymentHistoryRecord, BitcoinSubscriptionRecord } from "./BitcoinRecords";

export interface GetAdminBalanceRequest {}

export interface GetAdminBalanceResponse {
    Satoshis: number;
    ValueUSD: number;
}

export interface CheckForPaymentRequest {}

export interface CheckForPaymentResponse {
    LastRecord: BitcoinPaymentHistoryRecord;
    Error: string;
}

export interface GetHistoryRecordsRequest {}

export interface GetHistoryRecordsResponse {
    Records: BitcoinPaymentHistoryRecord[]
}

export interface GetPaymentStatusRequest {}

export interface GetPaymentStatusResponse {
    Subscription: BitcoinSubscriptionRecord;
    LastPayment: BitcoinPaymentHistoryRecord
}

export interface SetSubscriptionLevelRequest {
    Level: number;
}