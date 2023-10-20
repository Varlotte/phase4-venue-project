import React, { useState } from "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Card, message} from 'antd'
import { InputNumber } from 'antd';
import { Link } from "react-router-dom";
import { BsDisplay } from "react-icons/bs";

function ReservationForm({eventId, selectedEvent}) {
    const [ticketQuantity, setTicketQuantity] = useState(0)
    const loggedIn = sessionStorage.getItem('currentUser')
    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
          type: 'success',
          content: `Tickets purchased. View in Dashboard`,
        });
      };

    function handleSubmit(values) {
       console.log(values["quantity"])
       console.log(eventId)
       if (sessionStorage.getItem('currentUser')) {
            fetch("/reservations",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    tickets: values["quantity"],
                    attendee_id: sessionStorage.getItem('currentUser'),
                    event_id: eventId
                })
            })
            .then(res => res.json())
            .then((reservation) => console.log(reservation))
       }
       
    }
    function handleChange(e) {
        console.log(e.target.value)
        setTicketQuantity(e.target.value)
    }


    return (
        <div>
            {loggedIn? <></>: <h2 id="NeedLogin">Please Log into your account to buy Tickets to this Event</h2>}
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish = {handleSubmit}
            >
            <Form.Item>
                <h1>Reserve Event Tickets</h1>
                <label>Event Date: {selectedEvent.event_date}</label>
            </Form.Item>
            <Form.Item
                name = "quantity"
                rules = {[{required: true, message: "Pleas input quantity"}]}
                // name="username"
                // rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                {/* <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Hello" /> */}
                <input type="number" placeholder={0} min={1} max={5} value={ticketQuantity} onChange={handleChange}/>
                
                
            </Form.Item>

            <Form.Item>
                
                {loggedIn? <Button type="primary" htmlType="submit" onClick= {success} className="login-form-button">Check Out</Button>: <Link to="/login"><Button type="primary" htmlType="submit" className="login-form-button">Check Out</Button></Link>}
            
            </Form.Item>
            {/* <div>
                <h1>Insert Image?</h1>
            </div> */}
            </Form>
        </div>
    )
}

export default ReservationForm