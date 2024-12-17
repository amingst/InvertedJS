export type ClaimRecord = {
    Name: string;
    Value: string;
    ExpiresOnUTC: string;
}

export interface GetClaimsRequest {
    UserID: string;
}

export interface GetClaimsResponse {
    Claims: ClaimRecord[]
}