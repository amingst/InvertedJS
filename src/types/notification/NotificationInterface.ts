export interface SendEmailRequest {
    SendToAddres: string;
    Subject: string;
    BodyPlain: string;
    BodyHtml: string;
}

export interface SendEmailResponse {
    Error: string;
}