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