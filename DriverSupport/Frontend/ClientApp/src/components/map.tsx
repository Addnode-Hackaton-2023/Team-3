import { Button, Col, Row } from "antd";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCreateMap } from "../hooks/hooks";


const Map = () => {
  const params = useParams();
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