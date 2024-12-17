export type ClaimRecord = {
	Name: string;
	Value: string;
	ExpiresOnUTC: string;
};

export type GetClaimsRequest = {
	UserID: string;
};

export type GetClaimsResponse = {
	Claims: ClaimRecord[];
};
