import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, DatePicker } from "antd";
import { useState } from "react";

function EventForm() {
  const onFinish = (values) => {
    console.log(values);
    const time = values.time.split(":")[0];
    console.log(time);
    console.log(values["date"].format("YYYY-MM-DD"));
    fetch("/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: values.eventName,
        description: values.description,
        price: values.price,
        event_date: values["date"].format("YYYY-MM-DD"),
        time: parseInt(time),
        location: "",
        image: values.image,
      }),
    })
      .then((res) => res.json())
      .then((event) => console.log(event));
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="eventName"
        rules={[{ required: true, message: "Enter your event's name" }]}
        style={{ display: "inline-block", width: "calc(50% - 8px)" }}
      >
        <Input placeholder="Event Name" />
      </Form.Item>
      <Form.Item
        name="price"
        rules={[
          {
            required: true,
            message: "How much do you plan to charge for entry",
          },
        ]}
        style={{
          display: "inline-block",
          width: "calc(50% - 8px)",
          margin: "0 8px",
        }}
      >
        <Input min={0} type="number" placeholder="Set Ticket Price" />
      </Form.Item>
      <Form.Item
        name="description"
        rules={[
          {
            required: true,
            message: "Please tell us about the even you wish to host",
          },
        ]}
      >
        <Input style={{ height: 100 }} placeholder="Description" />
      </Form.Item>
      <Form.Item
        name="image"
        rules={[
          {
            required: true,
            message:
              "Upload an image that you believe matches your type of event",
          },
        ]}
      >
        <Input placeholder="Image URL" />
      </Form.Item>
      <Form.Item
        name="time"
        rules={[
          { required: true, message: "Need to set a time for your event" },
        ]}
      >
        <Input type="time" placeholder="Schedule your time" />
      </Form.Item>
      <Form.Item name="date">
        <DatePicker
          type="date"
          rules={[
            {
              required: true,
              message: "Date is required, must be set in the future",
            },
          ]}
          style={{ width: "calc(100%)" }}
          format="YYYY-MM-DD"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Accept Hosting Fees</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
}

export default EventForm;
