import {
	UserNotificationSettingsNormalRecord,
	UserNotificationSettingsRecord,
} from './UserNotificationSettingsRecord';

// TODO: Document
export type GetAllTokensRequest = {
	IncludeDisabledPush: boolean;
};

export type GetAllTokensResponse = {
	TokenIDs: string[];
};

export type GetRecordRequest = {};

export type GetRecordResponse = {
	Record: UserNotificationSettingsRecord;
};

export type ModifyNormalRecordRequest = {
	Record: UserNotificationSettingsNormalRecord;
};

export type ModifyNormalRecordResponse = {
	Error: string;
};

export type RegisterNewTokenRequest = {
	TokenID: string;
};

export type RegisterNewTokenResponse = {
	Error: string;
};

export type UnRegisterNewTokenRequest = {
	TokenID: string;
};

export type UnRegisterNewTokenResponse = {
	Error: string;
};
