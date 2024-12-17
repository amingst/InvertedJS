import {
	BitcoinPaymentHistoryRecord,
	BitcoinSubscriptionRecord,
} from './BitcoinRecords';

export type GetAdminBalanceRequest = {};

export type GetAdminBalanceResponse = {
	Satoshis: number;
	ValueUSD: number;
};

export type CheckForPaymentRequest = {};

export type CheckForPaymentResponse = {
	LastRecord: BitcoinPaymentHistoryRecord;
	Error: string;
};

export type GetHistoryRecordsRequest = {};

export type GetHistoryRecordsResponse = {
	Records: BitcoinPaymentHistoryRecord[];
};

export type GetPaymentStatusRequest = {};

export type GetPaymentStatusResponse = {
	Subscription: BitcoinSubscriptionRecord;
	LastPayment: BitcoinPaymentHistoryRecord;
};

export type SetSubscriptionLevelRequest = {
	Level: number;
};
