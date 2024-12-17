/**
 * Represents the configuration for the InvertedTech sendgrid integration
 * @typedef {object} SendgridOwnerSettings
 * @property {boolean} Enabled - Determines if the Sendgrid integration is enabled on the server
 * @property {string} ApiKeySecret - Api Key from Sendgrid
 * @property {string} SendFromAddress - Email address used by sendgrid to send emails
 * @example
 * ```
 * const sendgridSettings: SendgridOwnerSettings = {
 *  Enabled: true,
 *  ApiKeySecret: "API_KEY",
 *  SendFromAddress: "noreply@example.com"
 * }
 * ```
*/
export type SendgridOwnerSettings = {
    Enabled: boolean;
    ApiKeySecret: string;
    SendFromAddress: string;
}