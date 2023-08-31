import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { GlobalOutlined, UnorderedListOutlined, HomeOutlined, UploadOutlined, DownloadOutlined, CheckOutlined } from '@ant-design/icons';
import { Avatar, Divider, List, Row, Skeleton, Col } from 'antd';
import { IDriving, IDrivingStop } from '../utils/dal';
import { useState } from 'react';
import DrivingStopForm from './DrivingStopForm';
import { apiURl } from '../utils/api';

const Vehicle = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { isLoading, data } = useQuery('driving', () =>
    fetch(`${apiURl}/Vehicles/${params.vehicleId}/Driving`).then(res =>
      res.json() as Promise<IDriving > 
    ) 
  );

  const [editMode, setEditMode] = useState(false);
  const [drivingStop, setDrivingStop] = useState<IDrivingStop>()

  const moveToEditMode = (selectedStop: IDrivingStop) => {
    setEditMode(true);
    setDrivingStop(selectedStop);
  }

  

  return (!editMode ?
    <div >
      {data ? 
      <div style={{padding: '5px 10px'}}>
        <Divider orientation="left">Dagens körning</Divider>
          <List
          style={{marginBottom: "50px"}}
          itemLayout="horizontal"
          dataSource={data.drivingStops}
          renderItem={(routeStop) => (
            <List.Item onClick={() => moveToEditMode(routeStop)}>
              <Skeleton loading={isLoading}>
                <List.Item.Meta
                  avatar={<Avatar style={{background: routeStop.stop.type === 0 ? 
                    'rgba(10, 182, 235, 0.404)' : routeStop.stop.type === 1 && routeStop.weight > 0 ? 'rgba(5, 128, 25, 0.712)' 
                    : routeStop.stop.type === 1 ? 'rgba(10, 235, 48, 0.404)' :
                    routeStop.stop.type === 2 ? 'rgba(198, 10, 235, 0.404)' : undefined}}
                    icon={routeStop.stop.type === 0 ? 
                      <HomeOutlined /> : routeStop.stop.type ===1 && routeStop.weight > 0 ? <CheckOutlined /> : routeStop.stop.type === 1 ? 
                      <DownloadOutlined /> : <UploadOutlined />}
                      />}
                  title={<span>{routeStop.stop.name}</span>}
                  description={routeStop.stop.address}
                />
              </Skeleton>
            </List.Item>
            )}
          />
      </div> : null}
      <div style={{position: 'fixed', bottom: 0, paddingTop: '5px', height: '50px', width: '100%', background: 'white'}}>
        <Row >
          <Col style={{textAlign: 'center'}} span={11}>
            <UnorderedListOutlined onClick={() => navigate(`../vehicle/${params.vehicleId}`)} style={{fontSize: '2rem'}}  />
          </Col>
          <Divider style={{fontSize: '2.3rem'}} type="vertical"/>
          <Col style={{textAlign: 'center'}} span={11}>
            <GlobalOutlined onClick={() => navigate(`../map/${params.vehicleId}`)} style={{ fontSize: '2rem'}}  />
          </Col>
        </Row>
      </div>
  </div> : <DrivingStopForm drivingStop={drivingStop} setEditMode={setEditMode} />
  )
}

export default Vehicle;