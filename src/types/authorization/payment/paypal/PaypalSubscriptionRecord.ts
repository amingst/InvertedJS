import { PaymentStatus, SubscriptionStatus } from "../SharedTypes";

export type PaypalSubscriptionRecord = {
    UserID: string;
    SubscriptionID: string;
    PaypalSubscriptionID: string;
    AmountCents: number;
    Status: SubscriptionStatus;
    CreatedOnUTC: string;
    LastPaidOnUTC: string;
    PaidThruUTC: string;
    RenewsOnUTC: string;
    CanceledOnUTC: string;
    ChangedOnUTC: string;
}

export type PaypalPaymentRecord = {
    UserID: string;
    SubscriptionID: string;
    PaymentID: string;
    PaypalPaymentID: string;
    AmountCents: number;
    Status: PaymentStatus;
    CreatedOnUTC: string;
    PaidOnUTC: string;
    PaidThruUTC: string;
    ChangedOnUTC: string;
}

export type PaypalSubscriptionFullRecord = {
    Subscription: PaypalSubscriptionRecord;
    Payments: PaypalPaymentRecord[]
}