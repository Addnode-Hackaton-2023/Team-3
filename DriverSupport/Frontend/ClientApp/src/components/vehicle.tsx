import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { GlobalOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Avatar, Divider, List, Row, Skeleton, Col } from 'antd';
import { IDriving } from '../utils/dal';


const Vehicle = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { isLoading, data } = useQuery('repoData', () =>
    fetch(`https://localhost:7090/api/Vehicles/${params.vehicleId}/Driving`).then(res =>
      res.json() as Promise<IDriving > 
    ) 
  );
  

  return (
    <div style={{padding: '5px 10px'}}>
      {data ? 
      <>
        <Divider orientation="left">Dagens körning</Divider>
          <List
          style={{marginBottom: "50px"}}
          itemLayout="horizontal"
          dataSource={data.drivingStops}
          renderItem={(routeStop) => (
            <List.Item>
              <Skeleton loading={isLoading}>
                <List.Item.Meta
                  avatar={<Avatar />}
                  title={<span>{routeStop.stop.name}</span>}
                  description={routeStop.stop.address}
                />
              </Skeleton>
            </List.Item>
            )}
          />
      </> : null}
      <div style={{position: 'fixed', bottom: 0, left: 5, height: '50px', width: '100%', background: 'white'}}>
        <Row >
          <Col style={{textAlign: 'center'}} span={11}>
            <UnorderedListOutlined onClick={() => navigate(`../vehicle/${params.vehicleId}`)} style={{fontSize: '2rem'}}  />
          </Col>
          <Divider style={{fontSize: '2.3rem'}} type="vertical"/>
          <Col style={{textAlign: 'center'}} span={11}>
            <GlobalOutlined onClick={() => navigate(`../map/${params.vehicleId}`)} style={{fontSize: '2rem'}}  />
          </Col>
        </Row>
      </div>
  </div>)
}

export default Vehicle;