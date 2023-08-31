import { Button, Col, Form, Input, Row, Typography } from "antd"
import { IDrivingStop } from "../utils/dal"
import TextArea from "antd/es/input/TextArea";
import { apiURl, putDrivingStop } from "../utils/api";
import {queryClient } from '../main';
import { useEffect, useState } from "react";


const { Text, Title } = Typography

interface IDrivingStopForm {
  drivingStop?: IDrivingStop;
  setEditMode: (value: boolean) => void;
}
const DrivingStopForm = ({drivingStop, setEditMode}: IDrivingStopForm) => {
  const [imgSrc, setImgSrc] = useState<string>();

  const onFinish = (values: IDrivingStop) => {
    console.log('Success:', values);
    
      if (drivingStop) {
        putDrivingStop(values, drivingStop.drivingId, drivingStop.ordinal);
        queryClient.invalidateQueries(['driving'])
        setEditMode(false);
      }
  };

  
  return (
    <div style={{padding: '15px'}}>
      <Row>
        <Col span={12}><Title level={3} >{drivingStop?.stop.name}</Title></Col>
        <Col span={12}><Text type="secondary">{drivingStop?.stop.address}</Text></Col>
      </Row>
      <Text strong>Kontakt: <Text underline>{drivingStop?.stop.contact}</Text></Text>
      
      
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
        <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
          <Button type="primary" htmlType="submit">
            Spara
          </Button>
          <Button onClick={() => setEditMode(false)} style={{marginLeft: '15px'}}>
            Avbryt
          </Button>
        </Form.Item>
      </Form>
      {drivingStop?.stop.hasImage && <img style={{width: '100%', height: 'auto'}} src={`${apiURl}/Stops/${drivingStop.stopId}/Image`} />}
  </div>
  )
}

export default DrivingStopForm;