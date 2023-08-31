import { IDrivingStop } from "./dal";

export const apiURl = 'https://localhost:7090/api';

export const putDrivingStop = (values: IDrivingStop, drivingId: string, ordinal: number) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values)
};
fetch(`${apiURl}/Drivings/${drivingId}/Stops/${ordinal}`, requestOptions).then(res => res)
    
};
