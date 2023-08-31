import { Button, Col, Divider, Form, Input, Row, Typography } from "antd"
import { IDrivingStop } from "../utils/dal"
import TextArea from "antd/es/input/TextArea";

const { Text, Title } = Typography

interface IDrivingStopForm {
  drivingStop?: IDrivingStop;
  setEditMode: (value: boolean) => void;
}
const DrivingStopForm = ({drivingStop, setEditMode}: IDrivingStopForm) => {
  console.log('driving stop ', drivingStop)

  const onFinish = (values: IDrivingStop) => {
    console.log('Success:', values);
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
  };
  fetch(`https://localhost:7090/api/Drivings/${drivingStop?.drivingId}/Stops/${drivingStop?.ordinal}`, requestOptions)
      .then(res => setEditMode(false));
  };

  
  return (
    <div style={{padding: '15px'}}>
      <Row>
        <Col span={12}><Title level={3} >{drivingStop?.stop.name}</Title></Col>
        <Col span={12}><Text type="secondary">{drivingStop?.stop.address}</Text></Col>
      </Row>
      
      
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={drivingStop}
        onFinish={onFinish}
      >
        <Form.Item<IDrivingStop>
          label="Hämtad vikt (Kg)"
          name="weight"
          rules={[{ required: true, message: 'Ange vikt' }]}
        >
          <Input placeholder="Ange vikt" />
        </Form.Item>
        <Form.Item<IDrivingStop>
          label="Stoppets tid (min)"
          name="duration"
        >
          <Input placeholder="Ange hur lång tid stoppet tog" />
        </Form.Item>
        <Form.Item<IDrivingStop>
          label="Kommentar"
          name="comment"
        >
        <TextArea
          showCount
          maxLength={250}

          placeholder="Skriv en kommentar"
        />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Spara
          </Button>
        </Form.Item>
      </Form>
  </div>
  )
}

export default DrivingStopForm;