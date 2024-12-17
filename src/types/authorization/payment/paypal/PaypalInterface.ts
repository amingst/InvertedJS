import {
	PaypalSubscriptionFullRecord,
	PaypalSubscriptionRecord,
} from './PaypalSubscriptionRecord';

export type PaypalCancelOwnSubscriptionRequest = {
	SubscriptionID: string;
	Reason: string;
};

export type PaypalCancelOwnSubscriptionResponse = {
	Record: PaypalSubscriptionRecord;
	Error: string;
};

export type PaypalGetOwnSubscriptionRequest = {};

export type PaypalGetOwnSubscriptionResponse = {
	Records: PaypalSubscriptionFullRecord[];
};

export type PaypalNewOwnSubscriptionRequest = {
	PaypalSubscriptionId: string;
};

export type PaypalNewOwnSubscriptionResponse = {
	Record: PaypalSubscriptionRecord;
	Error: string;
};
