import { CMSOwnerRecord, CMSPrivateRecord, CMSPublicRecord, CommentsOwnerRecord, CommentsPrivateRecord, CommentsPublicRecord, NotificationOwnerRecord, NotificationPrivateRecord, NotificationPublicRecord, PersonalizationOwnerRecord, PersonalizationPrivateRecord, PersonalizationPublicRecord, SettingsOwnerData, SettingsPrivateData, SettingsPublicData, SubscriptionOwnerRecord, SubscriptionPrivateRecord, SubscriptionPublicRecord } from "./SettingsRecord";

export interface GetPublicDataRequest {}

export interface GetPublicDataResponse {
    Public: SettingsPublicData;
}

export interface GetPublicNewerDataRequest {
    VersionNum: number;
}

export interface GetPublicNewerDataResponse {
    Public: SettingsPublicData;
}

export interface GetAdminDataRequest {}

export interface GetAdminDataResponse {
    Public: SettingsPublicData;
    Private: SettingsPrivateData;
}

export interface GetAdminNewerDataRequest {
    VersionNum: number;
}

export interface GetAdminNewerDataResponse {
    Public: SettingsPublicData;
    Private: SettingsPrivateData;
}

export interface GetOwnerDataRequest {}

export interface GetOwnerDataResponse {
    Public: SettingsPublicData;
    Private: SettingsPrivateData;
    Owner: SettingsOwnerData
}

export interface GetOwnerNewerDataRequest {
    VersionNum: number;
}

export interface GetOwnerNewerDataResponse {
    Public: SettingsPublicData;
    Private: SettingsPrivateData;
    Owner: SettingsOwnerData
}

export enum ModifyResponseErrorType {
    NoError = 0,
    UnknownError = -1
}

export interface ModifyCMSPublicDataRequest {
    Data: CMSPublicRecord;
}

export interface ModifyCMSPublicDataResponse {
    Error: ModifyResponseErrorType;
}

export interface ModifyCMSPrivateDataRequest {
    Data: CMSPrivateRecord;
}

export interface ModifyCMSPrivateDataResponse {
    Error: ModifyResponseErrorType;
}

export interface ModifyCMSOwnerDataRequest {
    Data: CMSOwnerRecord;
}

export interface ModifyCMSOwnerDataResponse {
    Error: ModifyResponseErrorType
}

export interface ModifyPersonalizationPublicDataRequest {
    Data: PersonalizationPublicRecord;
}

export interface ModifyPersonalizationPublicDataResponse {
    Error: ModifyResponseErrorType;
}

export interface ModifyPersonalizationPrivateDataRequest {
    Data: PersonalizationPrivateRecord;
}

export interface ModifyPersonalizationPrivateDataResponse {
    Error: ModifyResponseErrorType;
}

export interface ModifyPersonalizationOwnerDataRequest {
    Data: PersonalizationOwnerRecord;
}

export interface ModifyPersonalizationOwnerDataResponse {
    Error: ModifyResponseErrorType
}

export interface ModifySubscriptionPublicDataRequest {
    Data: SubscriptionPublicRecord;
}

export interface ModifySubscriptionPublicDataResponse {
    Error: ModifyResponseErrorType;
}

export interface ModifySubscriptionPrivateDataRequest {
    Data: SubscriptionPrivateRecord;
}

export interface ModifySubscriptionPrivateDataResponse {
    Error: ModifyResponseErrorType;
}

export interface ModifySubscriptionOwnerDataRequest {
    Data: SubscriptionOwnerRecord;
}

export interface ModifySubscriptionOwnerDataResponse {
    Error: ModifyResponseErrorType;
}

export interface ModifyCommentsPublicDataRequest {
    Data: CommentsPublicRecord;
}

export interface ModifyCommentsPublicDataResponse {
    Error: ModifyResponseErrorType;
}

export interface ModifyCommentsPrivateDataRequest {
    Data: CommentsPrivateRecord;
}

export interface ModifyCommentsPrivateDataResponse {
    Error: ModifyResponseErrorType;
}

export interface ModifyCommentsOwnerDataRequest {
    Data: CommentsOwnerRecord;
}

export interface ModifyCommentsOwnerDataResponse {
    Error: ModifyResponseErrorType;
}

export interface ModifyNotificationPublicDataRequest {
    Data: NotificationPublicRecord;
}

export interface ModifyNotificationPublicDataResponse {
    Error: ModifyResponseErrorType;
}

export interface ModifyNotificationPrivateDataRequest {
    Data: NotificationPrivateRecord;
}

export interface ModifyNotificationPrivateDataResponse {
    Error: ModifyResponseErrorType;
}

export interface ModifyNotificationOwnerDataRequest {
    Data: NotificationOwnerRecord;
}

export interface ModifyNotificationOwnerDataResponse {
    Error: ModifyResponseErrorType;
}