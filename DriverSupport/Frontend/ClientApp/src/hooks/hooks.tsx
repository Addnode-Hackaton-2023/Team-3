import { MutableRefObject, useEffect } from 'react'
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Polyline from "@arcgis/core/geometry/Polyline";
import RouteLayer from "@arcgis/core/layers/RouteLayer";
import Stop from "@arcgis/core/rest/support/Stop";
import { IDriving, IDrivingStop } from '../utils/dal';
import RouteParameters from "@arcgis/core/rest/support/RouteParameters";
import Track from "@arcgis/core/widgets/Track";
import Circle from "@arcgis/core/geometry/Circle";
import Graphic from "@arcgis/core/Graphic";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Collection from "@arcgis/core/core/Collection";
import PopupTemplate from "@arcgis/core/PopupTemplate";

const createStops = (drivingStops?: IDrivingStop[]) => {

  return drivingStops?.map(stop => 
     new Stop({geometry: stop.stop.point, name: stop.stop.name})
  );
}

const createLayer = (stops: Collection<IDrivingStop>, color: string, name: string, symbol: string) => {
  var graphics = new Collection<Graphic>(stops.map((s, index) => new Graphic({
    geometry: new Circle({
      center: s.stop.point,
      radius: 100,
      radiusUnit: "meters"
    }),
    attributes: {
      "ObjectID": index,
      "name": s.stop.name,
      "contact": s.stop.contact,
      "address": s.stop.address
    }
  })));
  return new FeatureLayer({
    source: graphics,
    objectIdField: name,
    fields: [{
      name: "ObjectID",
      type: "oid",
    },
    {
      name: "name",
      type: "string"
    },
    {
      name: "contact",
      type: "string"
    },
    {
      name: "address",
      type: "string"
    }],
    popupTemplate: {
      title: "{name}",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "contact",
              label: "Contact:"
            },
            {
              fieldName: "address",
              label: "Address:"
            }
          ]
        }
      ]
    },
    renderer: {  // overrides the layer's default renderer
      type: "simple",
      symbol: {
        type: "text",
        color: color,
        text: symbol,
        font: {
          size: 20,
          family: "CalciteWebCoreIcons"
        }
      }
    }
  });
}

const parameters = new RouteParameters({
  apiKey: "AAPK459c1630e7b646f6ba8a8d304ef19b9fZsh6ko3guwFJUEr0pslgn715Wz8tCZpFb3NbvB4CB18ze1EwbZYjNzHDjhZT_lR8"
})

export const useCreateMap = (mapRef: MutableRefObject<HTMLDivElement | null>, driving?: IDriving) => {
  useEffect(() => {
    let view: MapView;
    const routePolyline = Polyline.fromJSON(driving?.routePolyline);
    const initializeMap = async (mapRef: MutableRefObject<string | HTMLDivElement | null>, routeLayer: RouteLayer, drivingStops?: IDrivingStop[]) => {
      const visited = new Collection<IDrivingStop>();
      const notVisited = new Collection<IDrivingStop>();
      drivingStops?.forEach(s => {
        if (s.stop.type === 1)
        {
          if (s.weight == null)
            notVisited.add(s);
          else
            visited.add(s);
        }
      });

      const visitedLayer = createLayer(visited, "#0AEB30", "visited", "\ue612");
      const notVisitedLayer = createLayer(notVisited, "#EB3F0A", "not visited", "\ue613");
      console.log("visited: " + visited.length);
      console.log("not visited: " + notVisited.length);
      const map = new Map({ basemap: 'satellite', layers: [routeLayer, visitedLayer, notVisitedLayer]});
      view = new MapView({
        map: map,
        extent: routePolyline.extent,
        container: mapRef.current!
      });

      let trackWidget = new Track({
        view: view
      });
      
      view.ui.add(trackWidget, "top-left");
      trackWidget.start();
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
      initializeMap(mapRef, routeLayer, driving?.drivingStops)
    })

    return () => view?.destroy();
  })
}