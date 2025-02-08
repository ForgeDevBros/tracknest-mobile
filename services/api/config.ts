// Base API 
export const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL;

export const apiConfig = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    }
};
