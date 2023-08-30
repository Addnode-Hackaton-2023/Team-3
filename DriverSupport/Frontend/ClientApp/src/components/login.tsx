import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Avatar, List, Skeleton  } from "antd";
import { CarOutlined } from '@ant-design/icons';
import { useQuery } from 'react-query'


interface IVehivles {
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

  console.log(data)
  return (
    data ? <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Skeleton loading={isLoading}>
        <List.Item.Meta
          avatar={<Avatar src={<CarOutlined />} />}
          title={<a href="https://ant.design">{item.name}</a>}
          description="Beskrivning av fordon"
        />
        <Button style={{margin: '0 15px'}} onClick={() => navigate('home')}>Välj</Button>
      </Skeleton>
      </List.Item>
  )}
  /> : null)
}

export default Login;