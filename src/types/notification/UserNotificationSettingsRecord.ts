export type UserNotificationSettingsRecord = {
    UserID: string;
    CreatedOnUTC: string;
    ModifiedOnUTC: string;
    Normal: UserNotificationSettingsNormalRecord;
}

export type UserNotificationSettingsNormalRecord = {
    DisableAllEmail: boolean;
    DisableAllPush: boolean;
    DisableLiveScheduleEmail: boolean;
    DisableLiveSchedulePush: boolean;
    DisableLiveGoEmail: boolean;
    DisableLiveGoPush: boolean;
    DisableNewAudioEmail: boolean;
    DisableNewAudioPush: boolean;
    DisableNewImageEmail: boolean;
    DisableNewImagePush: boolean;
    DisableNewVideoEmail: boolean;
    DisableNewVideoPush: boolean;
    DisableNewWrittenEmail: boolean;
    DisableNewWrittenPush: boolean;
}