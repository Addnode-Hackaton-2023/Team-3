import { MutableRefObject, useEffect } from 'react'
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Polyline from "@arcgis/core/geometry/Polyline";
import RouteLayer from "@arcgis/core/layers/RouteLayer";
import Stop from "@arcgis/core/rest/support/Stop";
import { IDriving, IDrivingStop } from '../utils/dal';
import RouteParameters from "@arcgis/core/rest/support/RouteParameters";

const createStops = (drivingStops?: IDrivingStop[]) => {

  return drivingStops?.map(stop => 
     new Stop({geometry: stop.stop.point, name: stop.stop.name})
  );
}

const parameters = new RouteParameters({
  apiKey: "AAPK459c1630e7b646f6ba8a8d304ef19b9fZsh6ko3guwFJUEr0pslgn715Wz8tCZpFb3NbvB4CB18ze1EwbZYjNzHDjhZT_lR8"
})

export const useCreateMap = (mapRef: MutableRefObject<HTMLDivElement | null>, driving?: IDriving) => {


  
  useEffect(() => {
    let view: MapView;
    const routePolyline = Polyline.fromJSON(driving?.routePolyline);
    const initializeMap = async (mapRef: MutableRefObject<string | HTMLDivElement | null>, routeLayer: RouteLayer) => {
      const map = new Map({ basemap: 'satellite', layers: [routeLayer]});
      view = new MapView({
        map: map,
        extent: routePolyline.extent,
        container: mapRef.current!
      });
    };


    const getResult = async (routeLayer: RouteLayer) => {
      return routeLayer.solve(parameters).then(res => res);
    }

    const stops = createStops(driving?.drivingStops)
    const routeLayer = new RouteLayer({
      stops: stops
    })
    
    getResult(routeLayer).then(res => {
      routeLayer.update(res as any);
      initializeMap(mapRef, routeLayer)

    })

    return () => view?.destroy();
  })
}