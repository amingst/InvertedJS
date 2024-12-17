/**
 * Base Implementation For InvertedTech Api Responses that return a paginated list of entities
 * @type {TRecord}
 * @typedef {object} RecordResponse<TRecord>
 * @property {TRecord[]} Records - List of the records of type TEntity that are returned by the api
 * @property {number} PageOffsetStart -
 * @property {number} PageOffsetEnd -
 * @property {number} PageTotalItems - Amount of records to return per page
 */
export type RecordResponse<TRecord> = {
	Records: TRecord[];
	PageOffsetStart: number;
	PageOffsetEnd: number;
	PageTotalItems: string;
};

/**
 * Base Class for all Client Manager instances
 *
 * @remarks Abstract Class that provides base implementations
 *
 * @public
 */
export abstract class BaseManager {
	protected client: Axios.AxiosInstance;

	constructor(client: Axios.AxiosInstance) {
		this.client = client;
	}

	/**
	 * Sets the client property to a new instance of Axios.AxiosInstance
	 *
	 * @param {Axios.AxiosInstance} client - The axios client http instance from {@link InvertedClient}
	 * @returns {void}
	 */
	public setClient(client: Axios.AxiosInstance) {
		this.client = client;
	}
}
