/**
 * Represents a record of a User's stored notification settings
 * @typedef {object} UserNotificationSettingsRecord
 * @property {string} UserID - GUID for the user
 * @property {string} CreatedOnUTC - Time the record was instantiated
 * @property {string} ModifiedOnUTC - Time the record was last modified
 * @property {UserNotificationSettingsNormalRecord} Normal - Object containing the notification permissions 
 */
export type UserNotificationSettingsRecord = {
    UserID: string;
    CreatedOnUTC: string;
    ModifiedOnUTC: string;
    Normal: UserNotificationSettingsNormalRecord;
}

/**
 * Represents a record of the permissions stored in {@link UserNotificationSettingsRecord}
 * 
 * @typedef {object} UserNotificationSettingsNormalRecord
 * 
 * @property {boolean} DisableAllEmail - Disables all Email Notifications for the user. 
 * If set to `true`, all email notifications are turned off.
 * @property {boolean} DisableAllPush - Disables all Push Notifications for the user.
 * If set to `true`, all push notifications are turned off.
 * @property {boolean} DisableLiveScheduleEmail - Disables Email notifications for newly scheduled live content.
 * If set to `true`, no email notifications will be sent when new live content is scheduled.
 * @property {boolean} DisableLiveSchedulePush - Disables Push notifications for newly scheduled live content.
 * If set to `true`, no push notifications will be sent when new live content is scheduled.
 * @property {boolean} DisableLiveGoEmail - Disables Email notifications for currently live content.
 * If set to `true`, no email notifications will be sent when content goes live.
 * @property {boolean} DisableLiveGoPush - Disables Push notifications for currently live content.
 * If set to `true`, no push notifications will be sent when content goes live.
 * @property {boolean} DisableNewAudioEmail - Disables Email Notifications when new Audio Content is posted.
 * If set to `true`, no email notifications will be sent when new audio content is uploaded.
 * @property {boolean} DisableNewAudioPush - Disables Push Notifications when new Audio Content is posted.
 * If set to `true`, no push notifications will be sent when new audio content is uploaded.
 * @property {boolean} DisableNewImageEmail - Disables Email Notifications when new Image Content is posted.
 * If set to `true`, no email notifications will be sent when new image content is uploaded.
 * @property {boolean} DisableNewImagePush - Disables Push Notifications when new Image Content is posted.
 * If set to `true`, no push notifications will be sent when new image content is uploaded.
 * @property {boolean} DisableNewVideoEmail - Disables Email Notifications when new Video Content is posted.
 * If set to `true`, no email notifications will be sent when new video content is uploaded.
 * @property {boolean} DisableNewVideoPush - Disables Push Notifications when new Video Content is posted.
 * If set to `true`, no push notifications will be sent when new video content is uploaded.
 * @property {boolean} DisableNewWrittenEmail - Disables Email Notifications when new Written Content is posted.
 * If set to `true`, no email notifications will be sent when new written content is uploaded.
 * @property {boolean} DisableNewWrittenPush - Disables Push Notifications when new Written Content is posted.
 * If set to `true`, no push notifications will be sent when new written content is uploaded.
 */
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
