import React from "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, message, Form, Input, DatePicker} from 'antd'
import {useState} from 'react';
import {Link} from 'react-router-dom'
import Navbar from "./NavBar";



function SignForm() {
    const [attendees, SetAttendees] = useState([])
    const [messageApi, contextHolder] = message.useMessage();

    const onFinish = (values) => {
        let user = {
            name: values.firstname + " " + values.lastname,
            email: values.email,
            password: values.password,
            birthday: values["birthday"].format("YYYY-MM-DD"),
        }
        fetch("http://127.0.0.1:5555/attendees",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user),
        })
        .then(res => res.json())
        .then(data => SetAttendees(data))
    console.log('Received values of form: ', user);
  };

  const success = () => {
    messageApi.open({
      type: 'success',
      content: `Profile successfuly created`,
    });
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Error creating profile',
    });
  };


    return (
        <>
        {contextHolder}
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        >
        <Form.Item
            name="firstname"
            rules={[{ required: true, message: 'First name required' }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
        >
            <Input placeholder="First Name" />
        </Form.Item>
        <Form.Item
            name="lastname"
            rules={[{ required: true, message: 'Last name required' }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
        >
            <Input placeholder="Last Name" />
        </Form.Item>
        <Form.Item
            name="email"
            rules={[{ required: true, message: 'Email required' }]}
        >
            <Input
            type="email"
            placeholder="Email"
            />
        </Form.Item>
        <Form.Item
            name="password"
            rules={[{ required: true, message: 'Password required' },
            {min: 12, message: 'Password must be minimum 12 characters' }]}
        >
            <Input
            type="password"
            placeholder="Password"
            />
        </Form.Item>
        <label>Birth Date: </label>
        <Form.Item name="birthday">
            <DatePicker 
            type = "birthday"
            rules = {[{required: true, message: "Birth date is required"}]}
            style = {{width: 'calc(100%)'}}
            format="YYYY-MM-DD"
            />
        </Form.Item>
        <Form.Item>
            <Button 
            onClick={success}
            type="primary" 
            htmlType="submit" 
            className="login-form-button" >
            Sign up
            </Button>
            Or <Link to = '/login'>Already have an account?</Link>
        </Form.Item>
        </Form>
    </>
  );
}

export default SignForm