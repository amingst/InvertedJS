import { ProductList } from "./ProductRecord";
import { StripeOneTimePaymentRecord } from "./StripeOneTimeRecord";
import { StripeSubscriptionFullRecord, StripeSubscriptionRecord } from "./StripeSubscriptionRecord";

export interface StripeCheckOtherSubscriptionRequest {
    UserID: string;
}

export interface StripeCheckOtherSubscriptionResponse {
    Records: StripeSubscriptionFullRecord[];
    Error: string;
}

export interface StripeCheckOwnSubscriptionRequest {}

export interface StripeCheckOwnSubscriptionResponse {
    Records: StripeSubscriptionFullRecord[];
    Error: string;
}

export interface StripeCheckOwnOneTimeRequest {}

export interface StripeCheckOwnOneTimeResponse {
    Records: StripeOneTimePaymentRecord[];
    Error: string;
}

export interface StripeCheckoutSessionRequest {
    PriceId: string;
}

export interface StripeCheckoutSessionResponse {
    SessionUrl: string;
    Error: string;
}

export interface StripeCreateBillingPortalRequest {
    CustomerId: string;
}

export interface StripeCreateBillingPortalResponse {
    Url: string;
    Error: string;
}

export interface StripeCancelOtherSubscriptionRequest {
    UserID: string;
    SubscriptionId: string;
    Reason: string;
}

export interface StripeCancelOtherSubscriptionResponse {
    Record: StripeSubscriptionRecord;
    Error: string;
}

export interface StripeCancelOwnSubscriptionRequest {
    Reason: string;
    SubscriptionId: string;
}

export interface StripeCancelOwnSubscriptionResponse {
    Record: StripeSubscriptionRecord;
    Error: string;
}

export interface StripeGetAccountDetailsRequest {}

export interface StripeGetAccountDetailsResponse {
    Products: ProductList;
    ClientId: string;
}

export interface StripeGetOwnSubscriptionRecordsRequest {}

export interface StripeGetOwnSubscriptionRecordsResponse {
    Records: StripeSubscriptionRecord[];
}

export interface StripeNewOwnSubscriptionRequest {
    SubscriptionId: string;
    SubscriptionPrice: number;
    CustomerId: string;
}

export interface StripeNewOwnSubscriptionResponse {
    Record: StripeSubscriptionRecord;
    Error: string;
}

export interface StripeEnsureOneTimeProductRequest {
    InternalId: string;
    Name: string;
    MinimumPrice: number;
    MaximumPrice: number;
}

export interface StripeEnsureOneTimeProductResponse {
    Error: string;
}