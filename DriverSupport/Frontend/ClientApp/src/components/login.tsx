import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Avatar, List, Skeleton  } from "antd";
import { CarOutlined } from '@ant-design/icons';
import { useQuery } from 'react-query'


export interface IVehivles {
    id: string,
    name: string,
}

const Login = () => {
  const navigate = useNavigate();
  const { isLoading, data } = useQuery('repoData', () =>
    fetch('https://localhost:7090/api/Vehicles').then(res =>
      res.json() as Promise<IVehivles[]> 
    ) 
  )

  return (
    <div style={{padding: '5px 10px'}}>
      {data ? <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Skeleton loading={isLoading}>
          <List.Item.Meta
            avatar={<Avatar icon={<CarOutlined />} />}
            title={<span>{item.name}</span>}
            description="Beskrivning av fordon"
          />
          <Button style={{margin: '0 5px'}} onClick={() => navigate(`vehicle/${item.id}`)}>Välj</Button>
        </Skeleton>
        </List.Item>
    )}
  /> : null}
  </div>)
}

export default Login;