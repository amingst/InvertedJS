import { RecordResponse } from "../base";
import { UserNormalRecord, UserPublicRecord } from "./UserRecord";

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
export interface AuthenticateUserRequest {
    UserName: string;
    Password: string;
    MFACode: string;
}

/**
 * @typedef {Object} AuthenticateUserResponse
 * @property {string} BearerToken - The JWT returned from a successful response
 * @property {UserNormalRecord} User - The Stored Record Of the user returned on a successful response
 */
export interface AuthenticateUserResponse {
    BearerToken: string;
    User: UserNormalRecord;
}

export enum ChangeOtherPasswordResponseErrorType {
    NoError = 0,
    UnknownError = -1,
    UserNotFound = 1,
    BadNewPassword = 2
}

export interface ChangeOtherPasswordRequest {
    UserID: string;
    NewPassword: string;
}

export interface ChangeOtherPasswordResponse {
    Error: ChangeOtherPasswordResponseErrorType;
}

export enum ChangeOtherProfileImageResponseErrorType {
    NoError = 0,
    UnknownError = -1,
    UserNotFound = 1,
    BadFormat = 2
}

export interface ChangeOtherProfileImageRequest {
    UserID: string;
    ProfileImage: Uint8Array
}

export interface ChangeOtherProfileImageResponse {
    Error: ChangeOtherProfileImageResponseErrorType
}

export enum ChangeOwnPasswordResponseErrorType {
    NoError = 0,
    UnknownError = -1,
    BadOldPassword = 1,
    BadNewPassword = 2,
}

export interface ChangeOwnPasswordRequest {
    OldPassword: string;
    NewPassword: string;
}

export interface ChangeOwnPasswordResponse {
    Error: ChangeOwnPasswordResponseErrorType
}

export enum ChangeOwnProfileImageResponseErrorType {
    NoError = 0,
    UnknownError = -1,
    BadFormat = 1,
}

export interface ChangeOwnProfileImageRequest {
    ProfileImage: Uint8Array
}

export interface ChangeOwnProfileImageResponse {
    Error: ChangeOwnProfileImageResponseErrorType
}

export enum CreateUserResponseErrorType {
    NoError = 0,
    UnknownError = -1,
    UserNameTaken = 1,
    EmailTaken = 2,
}

export interface CreateUserRequest {
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
}

export interface CreateUserResponse {
    BearerToken: string;
    Error: CreateUserResponseErrorType
}

export enum DisableEnableOtherUserResponseErrorType {
    NoError = 0,
    UnknownError = -1
}

export interface DisableEnableOtherUserRequest {
    UserID: string;
}

export interface DisableEnableOtherUserResponse {
    Error: DisableEnableOtherUserResponseErrorType;
}

export interface DisableOtherTotpRequest {
    UserID: string;
    TotpID: string;
}

export interface DisableOtherTotpResponse {
    Error: string;
}

export interface DisableOwnTotpRequest {
    TotpID: string;
}

export interface DisableOwnTotpResponse {
    Error: string;
}

export interface GenerateOtherTotpRequest {
    UserID: string;
    DeviceName: string;
}

export interface GenerateOtherTotpResponse {
    TotpID: string;
    Key: string;
    QRCode: string;
    Error: string;
}

export interface GenerateOwnTotpRequest {
    DeviceName: string
}

export interface GenerateOwnTotpResponse {
    TotpID: string;
    Key: string;
    QRCode: string;
    Error: string;
}

export interface GetAllUsersRequest {
    PageSize: number;
    PageOffset: number;
}

export interface GetAllUsersResponse extends RecordResponse<UserNormalRecord>{};

export interface GetListOfOldUserIDsRequest {}

export interface GetListOfOldUserIDsResponse {
    UserID: string;
    OldUserID: string;
    ModifiedOnUTC: string;
}

export interface GetOtherUserRequest {
    UserID: string;
}

export interface GetOtherUserResponse {
    Record: UserNormalRecord;
}

export interface GetOtherUserByEmailRequest {
    Email: string;
}

export interface GetOtherUserByEmailResponse {
    Record: UserNormalRecord;
}

export interface GetOtherPublicUserRequest {
    UserID: string;
}

export interface GetOtherPublicUserResponse {
    Record: UserPublicRecord
}

export interface GetOtherPublicUserByUserNameRequest {
    UserName: string;
}

export interface GetOtherPublicUserByUserNameResponse {
    Record: UserPublicRecord
}

export interface GetOtherTotpListRequest {
    UserID: string;
}

export interface GetOtherTotpListResponse {
    Devices: TOTPDeviceLimited[]
}

export interface GetOwnTotpListRequest {}

export interface GetOwnTotpListResponse {
    Devices: TOTPDeviceLimited[]
}

export interface GetOwnUserRequest {}

export interface GetOwnUserResponse {
    Record: UserNormalRecord;
}

export type UserIdRecord = {
    UserID: string;
    DisplayName: string;
    UserName: string;
}

export interface GetUserIdListRequest {}

export interface GetuserIdListResponse {
    Records: UserIdRecord[];
}

export interface ModifyOtherUserRequest {
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
}

export interface ModifyOtherUserResponse {
    Error: string;
}

export interface ModifyOtherUserRolesRequest {
    UserID: string;
    Roles: string[];
}

export interface ModifyOtherUserRolesResponse {
    Error: string;
}

export interface ModifyOwnUserRequest {
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
}

export interface ModifyOwnUserResponse {
    Error: string;
    BearerToken: string;
}

export interface RenewTokenRequest {}

export interface RenewTokenResponse {
    BearerToken: string;
}

export type TOTPDeviceLimited = {
    TotpID: string;
    DeviceName: string;
    CreatedOnUTC: string;
}

export type UserSearchRecord = {
    UserID: string;
    UserName: string;
    DisplayName: string;
    Emails: string[];
    Roles: string[];
    CreatedOnUTC: string;
    ModifiedOnUTC: string;
    DisabledOnUTC: string;
}

export interface SearchUsersAdminRequest {
    PageSize: number;
    PageOffset: number;
    UserIDs: string[];
    SearchString: string;
    Roles: string[];
    CreatedAfter: string;
    CreatedBefore: string;
    IncludeDeleted: boolean;
}

export interface SearchUsersAdminResponse extends RecordResponse<UserSearchRecord> {}

export interface VerifyOtherTotpRequest {
    UserID: string;
    TotpID: string;
    Code: string;
}

export interface VerifyOtherTotpResponse {
    Error: string;
}

export interface VerifyOwnTotpRequest {
    TotpID: string;
    Code: string;
}

export interface VerifyOwnTotpResponse {
    Error: string;
}
