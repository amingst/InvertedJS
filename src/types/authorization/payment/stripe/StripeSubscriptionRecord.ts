import { PaymentStatus, SubscriptionStatus } from "../SharedTypes";

export type StripeSubscriptionRecord = {
    UserID: string;
    SubscriptionID: string;
    StripeSubscriptionID: string;
    CustomerId: string;
    AmountCents: number;
    Status: SubscriptionStatus;
    CreatedOnUTC: string;
    LastPaidOnUTC: string;
    PaidThruUTC: string;
    RenewsOnUTC: string;
    CanceledOnUTC: string;
    ChangedOnUTC: string;
}

export type StripePaymentRecord = {
    UserID: string;
    SubscriptionID: string;
    PaymentID: string;
    StripePaymentID: string;
    AmountCents: number;
    Status: PaymentStatus;
    CreatedOnUTC: string;
    PaidOnUTC: string;
    PaidThruUTC: string;
    ChangedOnUTC: string;
}

export type StripeSubscriptionFullRecord = {
    Subscription: StripeSubscriptionRecord;
    Payments: StripePaymentRecord[]
}