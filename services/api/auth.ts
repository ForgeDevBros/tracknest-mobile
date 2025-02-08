import { API_BASE_URL, apiConfig } from './config';

export const authApi = {
    googleSignIn: async (provider_token: string) => {
        try {
            const response = await fetch(`${API_BASE_URL}/auth/google-signin`, {
                method: 'POST',
                ...apiConfig,
                headers: {
                    ...apiConfig.headers,
                    'Authorization': `Bearer ${provider_token}`
                }
            });
            if (!response.ok) {
                const error = await response.json();
                console.error('API Error:', error);
                throw new Error(error.message);
            }
            return response.json();
        } catch (error) {
            console.error('Error making API call:', error);
            throw error;
        }
    }
};
