export interface IStop {
    id: string,
    name: string,
    type: number,
    address: string,
    contact: string,
    notes: string,
    duration: number,
    latitude: number,
    longitude: number,
    image: string,
    movieUrl: string
  }
  
  /*
  interface IRouteStop {
    routeId: string,
    stopId: string,
    ordinal: number,
    stop: IStop,
    vehicle: IVehivles
  }
  
  interface IRoute {
    id: string,
    name: string,
    vehicleId: string,
    routeStops: IRouteStop[]
  }
  */
  
  export interface IDrivingStop {
    drivingId: string,
    stopId: string,
    ordinal: number,
    weight: number,
    duration: number,
    comment: string,
    eta: string,
    stop: IStop
  }
  
  export interface IDriving {
    id: string,
    routeId: string,
    vehicleId: string,
    date: string,
    duration: number,
    routeName: string,
    routePolyline: any,
    drivingStops: IDrivingStop[]
  }