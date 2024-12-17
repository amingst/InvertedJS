export type UserRecord = {
    Normal: UserNormalRecord;
    Server: UserServerRecord;
}

export type UserNormalRecord = {
    Public: UserPublicRecord;
    Private: UserPrivateRecord;
}

export type UserPublicRecord = {
    UserID: string;
    CreatedOnUTC: string;
    ModifiedOnUTC: string;
    DisabledOnUTC: string;
    Data: UserPublicData;
}

export type UserPublicData = {
    UserName: string;
    DisplayName: string;
    Identities: string[];
    Bio: string;
    ProfileImagePNG: Uint8Array
}

export type UserPrivateRecord = {
    Roles: string[];
    CreatedBy: string;
    ModifiedBy: string;
    DisabledBy: string;
    Data: UserPrivateData;
}

export type UserPrivateData = {
    Emails: string[];
    MailingAddressLine1: string;
    MailingAddressLine2: string;
    MailingAddressCity: string;
    MailingAddressState: string;
    MailingAddressPostalCode: string;
    MailingAddressCountryCode: string;
    FirstName: string;
    LastName: string;
    OldUserID: string;
}

export type UserServerRecord = {
    PasswordHash: Uint8Array;
    PasswordSalt: Uint8Array;
    TOTPDevices: TOTPDevice[];
    OldPassword: string;
    OldPasswordAlgorithm: string;
}

export type TOTPDevice = {
    TotpID: string;
    DeviceName: string;
    Key: Uint8Array;
    CreatedOnUTC: string;
    VerifiedOnUTC: string;
    DisabledOnUTC: string;
}