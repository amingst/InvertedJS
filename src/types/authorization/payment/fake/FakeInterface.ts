import { FakeSubscriptionRecord } from "./FakeSubscriptionRecord";

export interface FakeCancelOtherSubscriptionRequest {
    UserId: string;
    Reason: string;
}

export interface FakeCancelOtherSubscriptionResponse {
    Record: FakeSubscriptionRecord
    Error: string;
}

export interface FakeCancelOwnSubscriptionRequest {
    Reason: string;
}

export interface FakeCancelOwnSubscriptionResponse {
    Record: FakeSubscriptionRecord;
    Error: string;
}

export interface FakeGetOtherSubscriptionRecordRequest {
    UserId: string;
}

export interface FakeGetOtherSubscriptionRecordResponse {
    Record: FakeSubscriptionRecord;
}

export interface FakeGetOwnSubscriptionRecordRequest {}

export interface FakeGetOwnSubscriptionRecordResponse {
    Record: FakeSubscriptionRecord;
}

export interface FakeNewOtherSubscriptionRequest {
    UserId: string;
    AmountCents: number;
}

export interface FakeNewOtherSubscriptionResponse {
    Record: FakeSubscriptionRecord;
    Error: string;
}

export interface FakeNewOwnSubscriptionRequest {
    AmountCents: number;
}

export interface FakeNewOwnSubscriptionResponse {
    Record: FakeSubscriptionRecord;
    Error: string;
}