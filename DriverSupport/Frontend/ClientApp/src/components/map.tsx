import { Button, Col, Row } from "antd";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from 'react-query'
import { useCreateMap } from "../hooks/hooks";
import { IDriving } from '../utils/dal';


const Map = () => {
  const params = useParams();

  const { isLoading, data } = useQuery('repoData', () =>
    fetch(`https://localhost:7090/api/Vehicles/${params.vehicleId}/Driving`).then(res => 
      res.json() as Promise<IDriving>
    ).
    then(driving => {
      return driving;
    })
  );

  const navigate = useNavigate();
  const mapDiv = useRef(null);
  useCreateMap(mapDiv);

  return (
    <>
    <div className="mapDiv" style={{ height: '500px'}} ref={mapDiv}></div>
    <Row>
      <Col>
        <Button onClick={() => navigate(`../vehicle/${params.vehicleId}`)}>List</Button>
      </Col>
    </Row>
    </>
    
  )
}

export default Map;