import { AuthenticateUserRequest, AuthenticateUserResponse } from "../types";

export class AuthManager {
    constructor(private client: Axios.AxiosInstance) {}

    public setClient(client: Axios.AxiosInstance) {
        this.client = client;
    }

    public async login(req: AuthenticateUserRequest): Promise<AuthenticateUserResponse | undefined> {
        try {
            const res = await this.client.post<AuthenticateUserResponse>('/auth/login', req);
            
            return res.data
        } catch (error) {
            console.error(`AuthManager Error In Login Function: ${error}`)
            return;
        }
    }
}