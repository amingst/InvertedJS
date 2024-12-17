import axios from 'axios';
import { InvertedClient } from './InvertedClient';  // Update with the correct import path
import { AuthManager } from './AuthManager';
import { SettingsManager } from './SettingsManager';

// Mocking Axios
jest.mock('axios');

describe('InvertedClient', () => {
    let invertedClient: InvertedClient;
    const mockBaseUrl = 'https://api.example.com';
    const mockToken = 'test-token';

    beforeEach(() => {
        jest.clearAllMocks();
        invertedClient = new InvertedClient(mockBaseUrl);
    });

    it('should create a client with no token', () => {
        // Check if Axios instance is created correctly without a token
        expect(axios.create).toHaveBeenCalledWith({
            baseURL: mockBaseUrl,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    });

    it('should create a client with a token', () => {
        // Create client with token
        invertedClient = new InvertedClient(mockBaseUrl, mockToken);

        // Check if Axios instance is created with the token
        expect(axios.create).toHaveBeenCalledWith({
            baseURL: mockBaseUrl,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${mockToken}`
            }
        });
    });

    it('should set a new token and update the client headers', () => {
        // Update the token using setToken
        invertedClient.setToken(mockToken);

        // Check if Axios instance is created with the updated token
        expect(axios.create).toHaveBeenCalledWith({
            baseURL: mockBaseUrl,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${mockToken}`
            }
        });
    });

    it('should instantiate authManager and settingsManager', () => {
        // Check if the authManager and settingsManager are instantiated correctly
        expect(invertedClient.authManager).toBeInstanceOf(AuthManager);
        expect(invertedClient.settingsManager).toBeInstanceOf(SettingsManager);

        // Verify that the axios client is passed to the managers
        expect(invertedClient.authManager).toHaveProperty('client');
        expect(invertedClient.settingsManager).toHaveProperty('client');
    });
});
