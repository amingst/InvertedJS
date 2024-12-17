import { PaypalSubscriptionFullRecord, PaypalSubscriptionRecord } from "./PaypalSubscriptionRecord";

export interface PaypalCancelOwnSubscriptionRequest {
    SubscriptionID: string;
    Reason: string;
}

export interface PaypalCancelOwnSubscriptionResponse {
    Record: PaypalSubscriptionRecord;
    Error: string;
}

export interface PaypalGetOwnSubscriptionRequest {}

export interface PaypalGetOwnSubscriptionResponse {
    Records: PaypalSubscriptionFullRecord[]
}

export interface PaypalNewOwnSubscriptionRequest {
    PaypalSubscriptionId: string;
}

export interface PaypalNewOwnSubscriptionResponse {
    Record: PaypalSubscriptionRecord;
    Error: string;
}