import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

function OrderForm() {
  const [order, setOrder] = useState({ name: '', price: '', weight: '' });
  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = () => {
    if (order.name && order.price && order.weight) {
      console.log(order);
      history('/admin/dashboard');
    }
  };

  return (
    <div className='content'>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for='orderName'>Order Name</Label>
              <Input type='text' name='name' id='orderName' placeholder='Enter order name' onChange={handleChange} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for='orderPrice'>Price</Label>
              <Input type='number' name='price' id='orderPrice' placeholder='Enter price' onChange={handleChange} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for='orderWeight'>Weight</Label>
              <Input type='number' name='weight' id='orderWeight' placeholder='Enter weight' onChange={handleChange} />
            </FormGroup>
          </Col>
        </Row>
        <Button color='primary' onClick={handleSubmit}>Add</Button>
      </Form>
    </div>
  );
}

export default OrderForm;