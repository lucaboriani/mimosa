import {config} from './config'

export const loadScripts = async() => {
  await Promise.all([
    await import('https://api.mapbox.com/mapbox-gl-js/v2.3.0/mapbox-gl.js'),
  ]).catch(er => console.log(er))
} 



export const loadMap = async (mount) => {
  try {
    await loadScripts()
  } catch (error) {
    console.log(error)
  }

  const mapboxgl= window.mapboxgl

  mapboxgl.accessToken = config.accessToken;

  const map = new mapboxgl.Map({
      container: mount,
      style: config.style,
      center: config.center,
      zoom: config.zoom,
      bearing: config.bearing,
      pitch: config.pitch,
      scrollZoom: false
  });

  map.touchZoomRotate.enable();

  map.on("load", function() {
      // setup the instance, pass callback functions
      const marker = new mapboxgl.Marker();
      if (config.showMarkers) {
          marker.setLngLat(config.center).addTo(map);
      }
      console.log(marker)

      const layers = map.getStyle().layers;

      let labelLayerId;
      for (var i = 0; i < layers.length; i++) {
          if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
              labelLayerId = layers[i].id;
              break;
          }
      }
      
      map.addLayer({
          'id': '3d-buildings',
          'source': 'composite',
          'source-layer': 'building',
          'filter': ['==', 'extrude', 'true'],
          'type': 'fill-extrusion',
          'minzoom': 15,
          'paint': {
          'fill-extrusion-color': '#a57d34',
          
          // use an 'interpolate' expression to add a smooth transition effect to the
          // buildings as the user zooms in
          'fill-extrusion-height': [
              "interpolate", ["linear"], ["zoom"],
              15, 0,
              15.05, ["get", "height"]
          ],
          'fill-extrusion-base': [
              "interpolate", ["linear"], ["zoom"],
              15, 0,
              15.05, ["get", "min_height"]
          ],
          'fill-extrusion-opacity': .6
          }
      }, labelLayerId);

  });
  map.addControl(new mapboxgl.NavigationControl());
}

