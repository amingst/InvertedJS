import { PaymentStatus, SubscriptionStatus } from "../SharedTypes";

export type ParallelEconomySubscriptionRecord = {
    UserID: string;
    SubscriptionID: string;
    ParallelEconomySubscriptionID: string;
    AmountCents: number;
    Status: SubscriptionStatus;
    CreatedOnUTC: string;
    LastPaidOnUTC: string;
    PaidThruUTC: string;
    RenewsOnUTC: string;
    CanceledOnUTC: string;
    ChangedOnUTC: string;
}

export type ParallelEconomyPaymentRecord = {
    UserID: string;
    SubscriptionID: string;
    PaymentID: string;
    ParallelEconomyPaymentID: string;
    AmountCents: number;
    Status: PaymentStatus;
    CreatedOnUTC: string;
    PaidOnUTC: string;
    PaidThruUTC: string;
    ChangedOnUTC: string;
}