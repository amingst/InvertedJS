import { ProductList } from './ProductRecord';
import { StripeOneTimePaymentRecord } from './StripeOneTimeRecord';
import {
	StripeSubscriptionFullRecord,
	StripeSubscriptionRecord,
} from './StripeSubscriptionRecord';

export type StripeCheckOtherSubscriptionRequest = {
	UserID: string;
};

export type StripeCheckOtherSubscriptionResponse = {
	Records: StripeSubscriptionFullRecord[];
	Error: string;
};

export type StripeCheckOwnSubscriptionRequest = {};

export type StripeCheckOwnSubscriptionResponse = {
	Records: StripeSubscriptionFullRecord[];
	Error: string;
};

export type StripeCheckOwnOneTimeRequest = {};

export type StripeCheckOwnOneTimeResponse = {
	Records: StripeOneTimePaymentRecord[];
	Error: string;
};

export type StripeCheckoutSessionRequest = {
	PriceId: string;
};

export type StripeCheckoutSessionResponse = {
	SessionUrl: string;
	Error: string;
};

export type StripeCreateBillingPortalRequest = {
	CustomerId: string;
};

export type StripeCreateBillingPortalResponse = {
	Url: string;
	Error: string;
};

export type StripeCancelOtherSubscriptionRequest = {
	UserID: string;
	SubscriptionId: string;
	Reason: string;
};

export type StripeCancelOtherSubscriptionResponse = {
	Record: StripeSubscriptionRecord;
	Error: string;
};

export type StripeCancelOwnSubscriptionRequest = {
	Reason: string;
	SubscriptionId: string;
};

export type StripeCancelOwnSubscriptionResponse = {
	Record: StripeSubscriptionRecord;
	Error: string;
};

export type StripeGetAccountDetailsRequest = {};

export type StripeGetAccountDetailsResponse = {
	Products: ProductList;
	ClientId: string;
};

export type StripeGetOwnSubscriptionRecordsRequest = {};

export type StripeGetOwnSubscriptionRecordsResponse = {
	Records: StripeSubscriptionRecord[];
};

export type StripeNewOwnSubscriptionRequest = {
	SubscriptionId: string;
	SubscriptionPrice: number;
	CustomerId: string;
};

export type StripeNewOwnSubscriptionResponse = {
	Record: StripeSubscriptionRecord;
	Error: string;
};

export type StripeEnsureOneTimeProductRequest = {
	InternalId: string;
	Name: string;
	MinimumPrice: number;
	MaximumPrice: number;
};

export type StripeEnsureOneTimeProductResponse = {
	Error: string;
};
