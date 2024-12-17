import axios from 'axios';
import { AuthManager } from './AuthManager';
import { SettingsManager } from './SettingsManager';

export class InvertedClient {
    private client: Axios.AxiosInstance;
    public readonly authManager: AuthManager;
    public readonly settingsManager: SettingsManager;

    constructor(private readonly baseUrl: string, private token?: string) {
        this.baseUrl = baseUrl;
        this.token = token;
        this.client = this.createClient(baseUrl, token);

        this.authManager = new AuthManager(this.client);
        this.settingsManager = new SettingsManager(this.client);
    }

    public createClient(baseUrl: string, token?: string): Axios.AxiosInstance {
        if (token && token !== '') {
            return axios.create({
                baseURL: baseUrl,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
        }

        return axios.create({
            baseURL: baseUrl,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    public setToken(token?: string) {
        if (token && token !== '') {
            this.token = token;
            this.client = axios.create({
                baseURL: this.baseUrl,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
        }
    }
}