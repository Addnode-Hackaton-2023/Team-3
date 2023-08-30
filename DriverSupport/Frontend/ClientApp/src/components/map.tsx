import { Button, Col, Row } from "antd";
import { useNavigate, useParams } from "react-router-dom";


const Map = () => {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <>
    <Row>
      <Col>
        <h1>Map</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        <Button onClick={() => navigate(`../vehicle/${params.vehicleId}`)}>List</Button>
      </Col>
    </Row>
    </>
    
  )
}

export default Map;