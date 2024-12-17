import { RecordResponse } from '../base';
import {
	ChangeOtherPasswordResponseErrorType,
	ChangeOtherProfileImageResponseErrorType,
	ChangeOwnPasswordResponseErrorType,
	ChangeOwnProfileImageResponseErrorType,
	CreateUserResponseErrorType,
} from '../errors';
import { UserNormalRecord, UserPublicRecord } from './UserRecord';

/**
 * @typedef {Object} AuthenticateUserRequest
 * @property {string} UserName - An InvertedTech User's UserName
 * @property {string} Password - An InvertedTech User's Password
 * @property {string} MFACode - The InvertedTech User's MFACode (If Enabled)
 * @example
 * ```
 * const req: AuthenticateUserRequest = {
 *  UserName: "jdoe",
 *  Password: "example",
 *  MFACode: ""     // If MFA is not enabled, leave this as a blank string
 * };
 * ```
 */
export type AuthenticateUserRequest = {
	UserName: string;
	Password: string;
	MFACode: string;
};

/**
 * @typedef {Object} AuthenticateUserResponse
 * @property {string} BearerToken - The JWT returned from a successful response
 * @property {UserNormalRecord} User - The Stored Record Of the user returned on a successful response
 */
export type AuthenticateUserResponse = {
	BearerToken: string;
	User: UserNormalRecord;
};

/**
 * Represents a request for an admin to change a user's password
 * @typedef {object} ChangeOtherPasswordRequest
 * @property {string} UserID - The ID of the user who's password you want to change
 * @property {string} NewPassword - The Password to set for the user
 */
export type ChangeOtherPasswordRequest = {
	UserID: string;
	NewPassword: string;
};

/**
 * Represents a response from a request to change another user's password
 * @typedef {object} ChangeOtherPasswordResponse
 * @property {@link ChangeOtherPasswordResponseErrorType} Error - Type of error returned by the api (returns 0 if there is no error)
 */
export type ChangeOtherPasswordResponse = {
	Error: ChangeOtherPasswordResponseErrorType;
};

/**
 * Represents a request for an admin to change another user's profile image
 * @typedef {object} ChangeOtherProfileImageRequest
 * @property {string} UserID - The ID of the user
 * @property {Uint8Array} ProfileImage - The raw data of the new profile image
 */
export type ChangeOtherProfileImageRequest = {
	UserID: string;
	ProfileImage: Uint8Array;
};

/**
 * Represents a response for a request to change another users profile image
 * @typedef {object} ChangeOtherProfileImageResponse
 * @property {@link ChangeOtherProfileImageResponseErrorType} Error - The type of error returned by the api (0 for no error)
 */
export type ChangeOtherProfileImageResponse = {
	Error: ChangeOtherProfileImageResponseErrorType;
};

/**
 * Represents a request for a self service password reset
 * @typedef {object} ChangeOwnPasswordRequest
 * @property {string} OldPassword - The user's current password
 * @property {string} NewPassword - The password to replace the current password with
 */
export type ChangeOwnPasswordRequest = {
	OldPassword: string;
	NewPassword: string;
};

/**
 * Represents a response from a request for a self service password reset
 * @typedef {object} ChangeOwnPasswordResponse
 * @property {@link ChangeOwnPasswordResponseErrorType} Error - The error returned from the request (0 if there was no error)
 */
export type ChangeOwnPasswordResponse = {
	Error: ChangeOwnPasswordResponseErrorType;
};

/**
 * Represents the request to change the current user's profile image.
 * @typedef {object} ChangeOwnProfileImageRequest
 * @property {Uint8Array} ProfileImage - Raw byte array of the profile image
 */
export type ChangeOwnProfileImageRequest = {
	ProfileImage: Uint8Array;
};

/**
 * Represents the response returned after attempting to change the current user's profile image.
 * @typedef {object} ChangeOwnProfileImageResponse
 * @property {@link ChangeOwnProfileImageResponseErrorType} Error - The type of the error to return
 */
export type ChangeOwnProfileImageResponse = {
	Error: ChangeOwnProfileImageResponseErrorType;
};

export type CreateUserRequest = {
	UserName: string;
	Password: string;
	DisplayName: string;
	Bio: string;
	Emails: string[];
	FirstName: string;
	LastName: string;
	MailingAddressLine1: string;
	MailingAddressLine2: string;
	MailingAddressCity: string;
	MailingAddressState: string;
	MailingAddressPostalCode: string;
	MailingAddressCountryCode: string;
};

export type CreateUserResponse = {
	BearerToken: string;
	Error: CreateUserResponseErrorType;
};

/**
 * Represents the possible error types returned when attempting to disable or enable another user.
 */
export enum DisableEnableOtherUserResponseErrorType {
	/**
	 * No error occurred; the operation was successful.
	 */
	NoError = 0,

	/**
	 * An unknown error occurred during the operation.
	 */
	UnknownError = -1,
}

export type DisableEnableOtherUserRequest = {
	UserID: string;
};

export type DisableEnableOtherUserResponse = {
	Error: DisableEnableOtherUserResponseErrorType;
};

export type DisableOtherTotpRequest = {
	UserID: string;
	TotpID: string;
};

export type DisableOtherTotpResponse = {
	Error: string;
};

export type DisableOwnTotpRequest = {
	TotpID: string;
};

export type DisableOwnTotpResponse = {
	Error: string;
};

export type GenerateOtherTotpRequest = {
	UserID: string;
	DeviceName: string;
};

export type GenerateOtherTotpResponse = {
	TotpID: string;
	Key: string;
	QRCode: string;
	Error: string;
};

export type GenerateOwnTotpRequest = {
	DeviceName: string;
};

export type GenerateOwnTotpResponse = {
	TotpID: string;
	Key: string;
	QRCode: string;
	Error: string;
};

export type GetAllUsersRequest = {
	PageSize: number;
	PageOffset: number;
};

export type GetAllUsersResponse = RecordResponse<UserNormalRecord>;

export type GetListOfOldUserIDsRequest = {};

export type GetListOfOldUserIDsResponse = {
	UserID: string;
	OldUserID: string;
	ModifiedOnUTC: string;
};

export type GetOtherUserRequest = {
	UserID: string;
};

export type GetOtherUserResponse = {
	Record: UserNormalRecord;
};

export type GetOtherUserByEmailRequest = {
	Email: string;
};

export type GetOtherUserByEmailResponse = {
	Record: UserNormalRecord;
};

export type GetOtherPublicUserRequest = {
	UserID: string;
};

export type GetOtherPublicUserResponse = {
	Record: UserPublicRecord;
};

export type GetOtherPublicUserByUserNameRequest = {
	UserName: string;
};

export type GetOtherPublicUserByUserNameResponse = {
	Record: UserPublicRecord;
};

export type GetOtherTotpListRequest = {
	UserID: string;
};

export type GetOtherTotpListResponse = {
	Devices: TOTPDeviceLimited[];
};

export type GetOwnTotpListRequest = {};

export type GetOwnTotpListResponse = {
	Devices: TOTPDeviceLimited[];
};

export type GetOwnUserRequest = {};

export type GetOwnUserResponse = {
	Record: UserNormalRecord;
};

export type UserIdRecord = {
	UserID: string;
	DisplayName: string;
	UserName: string;
};

export type GetUserIdListRequest = {};

export type GetuserIdListResponse = {
	Records: UserIdRecord[];
};

export type ModifyOtherUserRequest = {
	UserName: string;
	Password: string;
	DisplayName: string;
	Bio: string;
	Emails: string[];
	FirstName: string;
	LastName: string;
	MailingAddressLine1: string;
	MailingAddressLine2: string;
	MailingAddressCity: string;
	MailingAddressState: string;
	MailingAddressPostalCode: string;
	MailingAddressCountryCode: string;
};

export type ModifyOtherUserResponse = {
	Error: string;
};

export type ModifyOtherUserRolesRequest = {
	UserID: string;
	Roles: string[];
};

export type ModifyOtherUserRolesResponse = {
	Error: string;
};

export type ModifyOwnUserRequest = {
	UserName: string;
	Password: string;
	DisplayName: string;
	Bio: string;
	Emails: string[];
	FirstName: string;
	LastName: string;
	MailingAddressLine1: string;
	MailingAddressLine2: string;
	MailingAddressCity: string;
	MailingAddressState: string;
	MailingAddressPostalCode: string;
	MailingAddressCountryCode: string;
};

export type ModifyOwnUserResponse = {
	Error: string;
	BearerToken: string;
};

export type RenewTokenRequest = {};

export type RenewTokenResponse = {
	BearerToken: string;
};

export type TOTPDeviceLimited = {
	TotpID: string;
	DeviceName: string;
	CreatedOnUTC: string;
};

export type UserSearchRecord = {
	UserID: string;
	UserName: string;
	DisplayName: string;
	Emails: string[];
	Roles: string[];
	CreatedOnUTC: string;
	ModifiedOnUTC: string;
	DisabledOnUTC: string;
};

export type SearchUsersAdminRequest = {
	PageSize: number;
	PageOffset: number;
	UserIDs: string[];
	SearchString: string;
	Roles: string[];
	CreatedAfter: string;
	CreatedBefore: string;
	IncludeDeleted: boolean;
};

export type SearchUsersAdminResponse = RecordResponse<UserSearchRecord>;

export type VerifyOtherTotpRequest = {
	UserID: string;
	TotpID: string;
	Code: string;
};

export type VerifyOtherTotpResponse = {
	Error: string;
};

export type VerifyOwnTotpRequest = {
	TotpID: string;
	Code: string;
};

export type VerifyOwnTotpResponse = {
	Error: string;
};
