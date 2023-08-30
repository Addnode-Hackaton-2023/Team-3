import { MutableRefObject, useEffect } from 'react'
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

export const useCreateMap = (mapRef: MutableRefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    let view: MapView;

    const initializeMap = async (mapRef: MutableRefObject<string | HTMLDivElement | null>) => {
      const map = new Map({ basemap: 'satellite'});
      view = new MapView({
        map: map,
        container: mapRef.current!
      });
    };

    initializeMap(mapRef)

    return () => view?.destroy();
  })
}