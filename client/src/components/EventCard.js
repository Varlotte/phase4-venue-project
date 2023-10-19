import React from "react";
import { Link } from "react-router-dom";

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Typography } from "antd";

function EventCard({ event, selectEvent }) {
  const { Meta } = Card;

  function handleClick() {
    selectEvent(event.id)
  }

  return (
    <div>   
      <Card
        onClick={handleClick}
        hoverable
        style={{ height: 400, width: 300 }}
        cover={
          <img
            alt="example"
            src={event.image}
            style={{ "object-fit": "cover", height: "200px" }}
          />
        }
        actions={
          [
            // <SettingOutlined key="setting" />,
            // <EditOutlined key="edit" />,
            // <EllipsisOutlined key="ellipsis" />,
          ]
        }
      > 
        <Link to="/selectedEvent">
        <Typography.Text style={{color: "black", fontSize: 20, fontWeight: "bold"}}>Event: {event.name}</Typography.Text>
        
        <br/>
        <Typography.Text style={{color: "black", fontSize: 12}}>Description: {event.description}</Typography.Text>
        <br/>
        <br/>
        <Meta className="cardDescriptions" description={"Date: " + event.event_date}/>
        <Meta className="cardDescriptions" description={event.time + ":00"}/>
        </Link>
      </Card>
    </div>
  );
}

export default EventCard;