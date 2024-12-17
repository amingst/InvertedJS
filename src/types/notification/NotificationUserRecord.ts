/**
 * Represents a record of a notification sent to a user.
 * 
 * This record contains key details about the notification, such as the token used to identify it, 
 * the user it was sent to, and timestamps for when it was created and last modified.
 * 
 * @typedef {object} NotificationUserRecord
 * 
 * @property {string} TokenID - A unique identifier for the token associated with the notification. 
 * This can be used to track the specific notification or message sent to the user.
 * 
 * @property {string} UserID - The unique identifier of the user to whom the notification was sent. 
 * This links the notification record to a specific user in the system.
 * 
 * @property {string} CreatedOnUTC - The UTC timestamp when the notification was created. 
 * This is the time when the notification was first generated or queued to be sent.
 * 
 * @property {string} ModifiedOnUTC - The UTC timestamp when the notification was last modified. 
 * This could indicate when the notification status or details were updated (e.g., marked as read or delivered).
 */
export type NotificationUserRecord = {
    TokenID: string;
    UserID: string;
    CreatedOnUTC: string;
    ModifiedOnUTC: string;
}
