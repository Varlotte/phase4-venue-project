import React from "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Space } from 'antd';
import SignForm from "./SignForm";
import Content from "./Content";
import Navbar from "./NavBar";


function Signup() {

  

  return (
    <>
    <Navbar />
    <Space>
      <Layout className='signup-layout-sider' direction="horizontal" size='medium'>
        <h1 
        style = {{color: 'black'}}
        >
        Create Account
        </h1>
        <SignForm className='signform'>Sider</SignForm>
      </Layout>
      <Layout className='signup-layout'>
      <Content >Content</Content>
      </Layout>
    
  </Space>
  </>
  );
}

export default Signup;
