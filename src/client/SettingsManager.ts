import { GetPublicDataResponse } from '../types/settings/SettingsInterface';
import { BaseManager } from '@/types/base';
/**
 * Manager Service for the InvertedTech settings api
 *
 * @public @sealed
 */
export class SettingsManager extends BaseManager {
	constructor(
		client: Axios.AxiosInstance,
		private publicSettings?: GetPublicDataResponse
	) {
		super(client);
	}

	private setPublicSettings(res: GetPublicDataResponse) {
		this.publicSettings = res;
	}

	/**
	 * Fetches PublicSettings from an InvertedTech server
	 *
	 * @remarks If SettingsManager.publicSettings is undefined, this method will force fetch
	 *
	 * @param {boolean} force - Force SettingsManager to fetch the PublicSettings from the server when true
	 * @returns
	 */
	public async getPublicSettings(
		force: boolean = true
	): Promise<GetPublicDataResponse | undefined> {
		try {
			// Return if force=false and this.publicSettings is not undefined
			if (!force && this.publicSettings) return this.publicSettings;

			// Fetch PublicSettings if this.publicSettings is undefined and force=true
			if (!this.publicSettings && force) {
				const res = await this.client.get<GetPublicDataResponse>(
					'/settings/public'
				);
				if (res.data) {
					this.setPublicSettings(res.data);
					return this.publicSettings;
				}
			}

			const res = await this.client.get<GetPublicDataResponse>(
				'/settings/public'
			);
			if (res.data) {
				this.setPublicSettings(res.data);
				return this.publicSettings;
			}
		} catch (error) {
			console.error(
				`SettingsManager Error In getPublicSettings Function: ${error}`
			);
			return;
		}
	}
}
