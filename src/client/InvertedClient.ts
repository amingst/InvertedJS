import axios from 'axios';
import { AuthManager } from './AuthManager';
import { SettingsManager } from './SettingsManager';

/**
 * Interface for the InvertedTech backend
 * 
 * @property {Axios.AxiosInstance} @private client - Main {@link axios.AxiosInstance} client for making http requests
 * @property {AuthManager} @public @readonly authManager - Instance of {@link AuthManager}
 * @property {SettingsManager} @public @readonly settingsManager - Instance of {@link SettingsManager}
 * 
 * @public @sealed
 */
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

    /**
     * Returns an Axios client from a base api url and a possibly undefined token
     * 
     * @remarks This should be called internally only
     * 
     * @param {string} baseUrl - The base url of your inverted tech api (default is localhost:80)
     * @param {string | undefined} token - The token to apply to the auth header of the client (if it exists) 
     * @returns {AxiosInstance}
     */
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

    /**
     * Sets the token in the Authorization Header of {@link InvertedClient}
     * 
     * @param {string | undefined} token - A Bearer Token to apply to {@link InvertedClient}
     * @returns {void}
     */
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