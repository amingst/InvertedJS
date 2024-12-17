import { FakeSubscriptionRecord } from './FakeSubscriptionRecord';

export type FakeCancelOtherSubscriptionRequest = {
	UserId: string;
	Reason: string;
};

export type FakeCancelOtherSubscriptionResponse = {
	Record: FakeSubscriptionRecord;
	Error: string;
};

export type FakeCancelOwnSubscriptionRequest = {
	Reason: string;
};

export type FakeCancelOwnSubscriptionResponse = {
	Record: FakeSubscriptionRecord;
	Error: string;
};

export type FakeGetOtherSubscriptionRecordRequest = {
	UserId: string;
};

export type FakeGetOtherSubscriptionRecordResponse = {
	Record: FakeSubscriptionRecord;
};

export type FakeGetOwnSubscriptionRecordRequest = {};

export type FakeGetOwnSubscriptionRecordResponse = {
	Record: FakeSubscriptionRecord;
};

export type FakeNewOtherSubscriptionRequest = {
	UserId: string;
	AmountCents: number;
};

export type FakeNewOtherSubscriptionResponse = {
	Record: FakeSubscriptionRecord;
	Error: string;
};

export type FakeNewOwnSubscriptionRequest = {
	AmountCents: number;
};

export type FakeNewOwnSubscriptionResponse = {
	Record: FakeSubscriptionRecord;
	Error: string;
};
