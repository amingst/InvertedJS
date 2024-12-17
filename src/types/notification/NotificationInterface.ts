/**
 * Request Object For Sending An Automatic Email
 * @typedef {object} SendEmailRequest
 * @property {string} SendToAddress - Email address to send the automatic email to
 * @property {string} Subject - Subject Line Of The Email
 * @property {string} BodyPlain - Plaintext email body
 * @property {string} BodyHtml - HTML Email Body
 */
export type SendEmailRequest = {
	SendToAddress: string;
	Subject: string;
	BodyPlain: string;
	BodyHtml: string;
};

/**
 * Response Object For Sending An Automatic Email
 * @typedef {object} SendEmailResponse
 * @property {string} Error - The error preventing the request from completing (if failed)
 */
export type SendEmailResponse = {
	Error: string;
};
