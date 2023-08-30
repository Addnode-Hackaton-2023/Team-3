import { Col, Row, Divider } from "antd";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from 'react-query'
import { useCreateMap } from "../hooks/hooks";
import { IDriving } from '../utils/dal';
import { GlobalOutlined, UnorderedListOutlined } from '@ant-design/icons';



const Map = () => {
  const params = useParams();

  const { data } = useQuery('repoData', () =>
    fetch(`https://localhost:7090/api/Vehicles/${params.vehicleId}/Driving`).then(res => 
      res.json() as Promise<IDriving>
    ).
    then(driving => {
      //console.log(__esri.Polyline.fromJSON(driving.routePolyline))
      return driving;
    })
  );

  const navigate = useNavigate();
  const mapDiv = useRef(null);
  useCreateMap(mapDiv, data);

  return (
    <>
    <div className="mapDiv" style={{ height: 'calc(100vh - 60px)'}} ref={mapDiv}></div>
    <div style={{position: 'fixed', bottom: 0, left: 5, height: '50px', width: '100%', background: 'white'}}>
        <Row >
          <Col style={{textAlign: 'center'}} span={11}>
            <UnorderedListOutlined  onClick={() => navigate(`../vehicle/${params.vehicleId}`)}style={{fontSize: '2rem'}}  />
          </Col>
          <Divider style={{fontSize: '2.3rem'}} type="vertical"/>
          <Col style={{textAlign: 'center'}} span={11}>
            <GlobalOutlined onClick={() => navigate(`../map/${params.vehicleId}`)} style={{fontSize: '2rem'}}  />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Map;