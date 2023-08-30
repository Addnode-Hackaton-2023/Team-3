import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { GlobalOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Avatar, Divider, List, Row, Skeleton, Col } from 'antd'


interface IStop {
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

interface IDrivingStop {
  drivingId: string,
  stopId: string,
  ordinal: number,
  weight: number,
  duration: number,
  comment: string,
  eta: string,
  stop: IStop
}

interface IDriving {
  id: string,
  routeId: string,
  vehicleId: string,
  date: string,
  duration: number,
  drivingStops: IDrivingStop[]
}

const Vehicle = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { isLoading, data } = useQuery('repoData', () =>
    fetch(`https://localhost:7090/api/Vehicles/${params.vehicleId}/Driving`).then(res =>
      res.json() as Promise<IDriving > 
    ) 
  )
  

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
          <Col style={{textAlign: 'center'}} span={10}>
            <UnorderedListOutlined style={{fontSize: '2rem'}}  />
          </Col>
          <Divider style={{fontSize: '2.3rem'}} type="vertical"/>
          <Col style={{textAlign: 'center'}} span={10}>
            <GlobalOutlined onClick={() => navigate(`../map/${params.vehicleId}`)} style={{fontSize: '2rem'}}  />
          </Col>
        </Row>
      </div>
  </div>)
}

export default Vehicle;