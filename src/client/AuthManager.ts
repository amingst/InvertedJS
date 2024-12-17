import { AuthenticateUserRequest, AuthenticateUserResponse } from '../types';
import { BaseManager } from '@/types/base';

/**
 * Manager Service for the InvertedTech auth api
 *
 * @public @sealed
 */
export class AuthManager extends BaseManager {
	constructor(client: Axios.AxiosInstance) {
		super(client);
	}

	/**
	 * Logs in to the InvertedTech authentication api
	 * @param {AuthenticateUserRequest} req - Login request
	 * @returns {(Promise<AuthenticateUserResponse>|undefined)} - Server response or undefined on error
	 *
	 * @example Login to InvertedTech
	 * ```
	 * // Request Object
	 * const req: AuthenticateUserRequest = {
	 *  UserName: "jdoe",
	 *  Password: "example",
	 *  MFACode: ""
	 * };
	 *
	 * const res = await authManager.login(req);
	 * ```
	 *
	 * @public
	 */
	public async login(
		req: AuthenticateUserRequest
	): Promise<AuthenticateUserResponse | undefined> {
		try {
			const res = await this.client.post<AuthenticateUserResponse>(
				'/auth/login',
				req
			);

			return res.data;
		} catch (error) {
			console.error(`AuthManager Error In Login Function: ${error}`);
			return;
		}
	}
}
