import { ParallelEconomySubscriptionRecord } from "./ParallelEconomySubscriptionRecord";
import { PlanList } from "./PlanRecord";

export interface CancelOwnSubscriptionRequest {
    Reason: string;
}

export interface CancelOwnSubscriptionResponse {
    Record: ParallelEconomySubscriptionRecord;
    Error: string;
}

export interface GetAccountDetailsRequest {}

export interface GetAccountDetailsResponse {
    Plans: PlanList;
    IsTest:boolean;
}

export interface GetOwnSubscriptionRecordRequest {}

export interface GetOwnSubscriptionRecordResponse {
    Record: ParallelEconomySubscriptionRecord
}

export interface NewOwnSubscriptionRequest {
    TransactionId: string;
}

export interface NewOwnSubscriptionResponse {
    Record: ParallelEconomySubscriptionRecord;
    Error: string;
}