export const variables = {
    accessToken: import.meta.env.MODE === 'development' ? import.meta.env.VITE_MAPBOX_API_KEY : import.meta.env.VITE_MAPBOX_API_KEY 
};