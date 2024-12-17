import { ModifyResponseErrorType } from '../errors';
import {
	CMSOwnerRecord,
	CMSPrivateRecord,
	CMSPublicRecord,
	CommentsOwnerRecord,
	CommentsPrivateRecord,
	CommentsPublicRecord,
	NotificationOwnerRecord,
	NotificationPrivateRecord,
	NotificationPublicRecord,
	PersonalizationOwnerRecord,
	PersonalizationPrivateRecord,
	PersonalizationPublicRecord,
	SettingsOwnerData,
	SettingsPrivateData,
	SettingsPublicData,
	SubscriptionOwnerRecord,
	SubscriptionPrivateRecord,
	SubscriptionPublicRecord,
} from './SettingsRecord';

export type GetPublicDataRequest = {};

export type GetPublicDataResponse = {
	Public: SettingsPublicData;
};

export type GetPublicNewerDataRequest = {
	VersionNum: number;
};

export type GetPublicNewerDataResponse = {
	Public: SettingsPublicData;
};

export type GetAdminDataRequest = {};

export type GetAdminDataResponse = {
	Public: SettingsPublicData;
	Private: SettingsPrivateData;
};

export type GetAdminNewerDataRequest = {
	VersionNum: number;
};

export type GetAdminNewerDataResponse = {
	Public: SettingsPublicData;
	Private: SettingsPrivateData;
};

export type GetOwnerDataRequest = {};

export type GetOwnerDataResponse = {
	Public: SettingsPublicData;
	Private: SettingsPrivateData;
	Owner: SettingsOwnerData;
};

export type GetOwnerNewerDataRequest = {
	VersionNum: number;
};

export type GetOwnerNewerDataResponse = {
	Public: SettingsPublicData;
	Private: SettingsPrivateData;
	Owner: SettingsOwnerData;
};

export type ModifyCMSPublicDataRequest = {
	Data: CMSPublicRecord;
};

export type ModifyCMSPublicDataResponse = {
	Error: ModifyResponseErrorType;
};

export type ModifyCMSPrivateDataRequest = {
	Data: CMSPrivateRecord;
};

export type ModifyCMSPrivateDataResponse = {
	Error: ModifyResponseErrorType;
};

export type ModifyCMSOwnerDataRequest = {
	Data: CMSOwnerRecord;
};

export type ModifyCMSOwnerDataResponse = {
	Error: ModifyResponseErrorType;
};

export type ModifyPersonalizationPublicDataRequest = {
	Data: PersonalizationPublicRecord;
};

export type ModifyPersonalizationPublicDataResponse = {
	Error: ModifyResponseErrorType;
};

export type ModifyPersonalizationPrivateDataRequest = {
	Data: PersonalizationPrivateRecord;
};

export type ModifyPersonalizationPrivateDataResponse = {
	Error: ModifyResponseErrorType;
};

export type ModifyPersonalizationOwnerDataRequest = {
	Data: PersonalizationOwnerRecord;
};

export type ModifyPersonalizationOwnerDataResponse = {
	Error: ModifyResponseErrorType;
};

export type ModifySubscriptionPublicDataRequest = {
	Data: SubscriptionPublicRecord;
};

export type ModifySubscriptionPublicDataResponse = {
	Error: ModifyResponseErrorType;
};

export type ModifySubscriptionPrivateDataRequest = {
	Data: SubscriptionPrivateRecord;
};

export type ModifySubscriptionPrivateDataResponse = {
	Error: ModifyResponseErrorType;
};

export type ModifySubscriptionOwnerDataRequest = {
	Data: SubscriptionOwnerRecord;
};

export type ModifySubscriptionOwnerDataResponse = {
	Error: ModifyResponseErrorType;
};

export type ModifyCommentsPublicDataRequest = {
	Data: CommentsPublicRecord;
};

export type ModifyCommentsPublicDataResponse = {
	Error: ModifyResponseErrorType;
};

export type ModifyCommentsPrivateDataRequest = {
	Data: CommentsPrivateRecord;
};

export type ModifyCommentsPrivateDataResponse = {
	Error: ModifyResponseErrorType;
};

export type ModifyCommentsOwnerDataRequest = {
	Data: CommentsOwnerRecord;
};

export type ModifyCommentsOwnerDataResponse = {
	Error: ModifyResponseErrorType;
};

export type ModifyNotificationPublicDataRequest = {
	Data: NotificationPublicRecord;
};

export type ModifyNotificationPublicDataResponse = {
	Error: ModifyResponseErrorType;
};

export type ModifyNotificationPrivateDataRequest = {
	Data: NotificationPrivateRecord;
};

export type ModifyNotificationPrivateDataResponse = {
	Error: ModifyResponseErrorType;
};

export type ModifyNotificationOwnerDataRequest = {
	Data: NotificationOwnerRecord;
};

export type ModifyNotificationOwnerDataResponse = {
	Error: ModifyResponseErrorType;
};
