export const variables = {
    accessToken: import.meta.env.MODE === 'development' ? import.meta.env.VITE_MAPBOX_API_KEY : process.env["MAPBOX_API_KEY"]
};

console.log("variables")
console.log(variables)
export const config = {
    style: 'mapbox://styles/mapbox/light-v10',
    accessToken: variables.accessToken ,
    //accessToken: '',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    center: [9.07013, 45.57566],
    zoom: 13.26,
    pitch: 60.00,
    bearing: 0.00
};

