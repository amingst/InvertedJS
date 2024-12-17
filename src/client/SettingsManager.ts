import { GetPublicDataResponse } from "../types/settings/SettingsInterface";

export class SettingsManager {
    constructor(private client: Axios.AxiosInstance, private publicSettings?: GetPublicDataResponse) {}

    public setClient(client: Axios.AxiosInstance) {
        this.client = client;
    }

    private setPublicSettings(res: GetPublicDataResponse) {
        this.publicSettings = res;
    }

    public async getPublicSettings(force: boolean = true): Promise<GetPublicDataResponse | undefined> {
        try {
            if (!force && this.publicSettings) return this.publicSettings;

            if (force) {
                const res = await this.client.get<GetPublicDataResponse>('/settings/public')
                if (res.data) {
                    this.setPublicSettings(res.data);
                    return this.publicSettings;
                }
            }
        } catch (error) {
            console.error(`SettingsManager Error In getPublicSettings Function: ${error}`)
            return;
        }
    }
}