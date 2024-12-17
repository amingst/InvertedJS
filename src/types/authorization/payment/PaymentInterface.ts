import { CryptoNewDetails } from './crypto';
import { FakeSubscriptionRecord } from './fake';
import { PaypalNewDetails, PaypalSubscriptionFullRecord } from './paypal';
import {
	StripeNewDetails,
	StripeNewOneTimeDetails,
	StripeOneTimePaymentRecord,
	StripeSubscriptionFullRecord,
} from './stripe';

export type GetNewDetailsRequest = {
	Level: number;
	DomainName: string;
};

export type GetNewDetailsResponse = {
	Crypto: CryptoNewDetails;
	Paypal: PaypalNewDetails;
	Stripe: StripeNewDetails;
};

export type GetNewOneTimeDetailsRequest = {
	InternalId: string;
	DomainName: string;
	DifferentPresetPriceCents: number;
};

export type GetNewOneTimeDetailsResponse = {
	// Crypto: CryptoNewOneTimeDetails;
	// Paypal: PaypalNewOneTimeDetails
	Stripe: StripeNewOneTimeDetails;
};

export type GetOtherSubscriptionRecordsRequest = {
	UserID: string;
};

export type GetOtherSubscriptionRecordsResponse = {
	Fake: FakeSubscriptionRecord;
	Paypal: PaypalSubscriptionFullRecord;
	Stripe: StripeSubscriptionFullRecord;
};

export type GetOwnSubscriptionRecordsRequest = {};

export type GetOwnSubscriptionRecordResponse = {
	Fake: FakeSubscriptionRecord;
	Paypal: PaypalSubscriptionFullRecord;
	Stripe: StripeSubscriptionFullRecord;
};

export type GetOwnOneTimeRecordsRequest = {};

export type GetOwnOneTimeRecordsResponse = {
	Stripe: StripeOneTimePaymentRecord[];
};
