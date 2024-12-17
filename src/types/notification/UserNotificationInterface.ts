import { UserNotificationSettingsNormalRecord, UserNotificationSettingsRecord } from "./UserNotificationSettingsRecord";

// TODO: Document
export interface GetAllTokensRequest {
    IncludeDisabledPush: boolean;
}

export interface GetAllTokensResponse {
    TokenIDs: string[];
}

export interface GetRecordRequest {}

export interface GetRecordResponse {
    Record: UserNotificationSettingsRecord;
}

export interface ModifyNormalRecordRequest {
    Record: UserNotificationSettingsNormalRecord
}

export interface ModifyNormalRecordResponse {
    Error: string;
}

export interface RegisterNewTokenRequest {
    TokenID: string;
}

export interface RegisterNewTokenResponse {
    Error: string;
}

export interface UnRegisterNewTokenRequest {
    TokenID: string;
}

export interface UnRegisterNewTokenResponse {
    Error: string;
}