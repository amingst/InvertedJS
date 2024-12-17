import { CryptoNewDetails } from "./crypto";
import { FakeSubscriptionRecord } from "./fake";
import { PaypalNewDetails, PaypalSubscriptionFullRecord } from "./paypal";
import { StripeNewDetails, StripeNewOneTimeDetails, StripeOneTimePaymentRecord, StripeSubscriptionFullRecord } from "./stripe";

export interface GetNewDetailsRequest {
    Level: number;
    DomainName: string;
}

export interface GetNewDetailsResponse {
    Crypto: CryptoNewDetails;
    Paypal: PaypalNewDetails;
    Stripe: StripeNewDetails;
}

export interface GetNewOneTimeDetailsRequest {
    InternalId: string;
    DomainName: string;
    DifferentPresetPriceCents: number;
}

export interface GetNewOneTimeDetailsResponse {
   // Crypto: CryptoNewOneTimeDetails;
   // Paypal: PaypalNewOneTimeDetails
    Stripe: StripeNewOneTimeDetails;
}

export interface GetOtherSubscriptionRecordsRequest {
    UserID: string;
}

export interface GetOtherSubscriptionRecordsResponse {
    Fake: FakeSubscriptionRecord;
    Paypal: PaypalSubscriptionFullRecord;
    Stripe: StripeSubscriptionFullRecord;
}

export interface GetOwnSubscriptionRecordsRequest {}

export interface GetOwnSubscriptionRecordResponse {
    Fake: FakeSubscriptionRecord;
    Paypal: PaypalSubscriptionFullRecord;
    Stripe: StripeSubscriptionFullRecord;
}

export interface GetOwnOneTimeRecordsRequest {}

export interface GetOwnOneTimeRecordsResponse {
    Stripe: StripeOneTimePaymentRecord[]
}