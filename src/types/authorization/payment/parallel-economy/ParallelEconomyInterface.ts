import { ParallelEconomySubscriptionRecord } from './ParallelEconomySubscriptionRecord';
import { PlanList } from './PlanRecord';

export type CancelOwnSubscriptionRequest = {
	Reason: string;
};

export type CancelOwnSubscriptionResponse = {
	Record: ParallelEconomySubscriptionRecord;
	Error: string;
};

export type GetAccountDetailsRequest = {};

export type GetAccountDetailsResponse = {
	Plans: PlanList;
	IsTest: boolean;
};

export type GetOwnSubscriptionRecordRequest = {};

export type GetOwnSubscriptionRecordResponse = {
	Record: ParallelEconomySubscriptionRecord;
};

export type NewOwnSubscriptionRequest = {
	TransactionId: string;
};

export type NewOwnSubscriptionResponse = {
	Record: ParallelEconomySubscriptionRecord;
	Error: string;
};
