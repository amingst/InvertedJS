import { PaymentStatus } from "../SharedTypes";

export type StripeOneTimePaymentRecord = {
    UserID: string;
    InternalID: string;
    PaymentID: string;
    StripePaymentID: string;
    AmountCents: number;
    Status: PaymentStatus
    CreatedOnUTC: string;
    PaidOnUTC: string;
    ChangedOnUTC: string;
}