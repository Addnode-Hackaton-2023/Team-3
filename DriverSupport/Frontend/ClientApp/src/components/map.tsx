import { Button, Col, Row } from "antd";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCreateMap } from "../hooks/hooks";


const Map = () => {
  const params = useParams();
  const navigate = useNavigate();
  const mapRef = useRef<HTMLDivElement>(null);
  useCreateMap(mapRef)
  return (
    <>
    <div className="map-view" ref={mapRef}></div>
    <Row>
      <Col>
        <Button onClick={() => navigate(`../vehicle/${params.vehicleId}`)}>List</Button>
      </Col>
    </Row>
    </>
    
  )
}

export default Map;