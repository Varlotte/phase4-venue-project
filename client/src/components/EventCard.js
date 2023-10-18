import React from "react";

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

function EventCard({event, selectEvent}) {
    const { Meta } = Card;
    //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQxCsv8O-kQGCaExouybCEksMVouT9eLco8g&usqp=CAU
    //https://www.wric.com/wp-content/uploads/sites/74/2022/07/IMG_9274.jpeg?strip=1
    
    function handleClick() {
        selectEvent(event.id);
    }

    return (
        <div>
        <Card
            onClick={handleClick}
            style={{ height: 500, width: 300 }}
            cover={
            <img
                alt="example"
                src={event.image}
            />
            }
            actions={[
            // <SettingOutlined key="setting" />,
            // <EditOutlined key="edit" />,
            // <EllipsisOutlined key="ellipsis" />,
            ]}
            >
            <div>
                <h2>Event: {event.name}</h2>
                <h3>Description: {event.description}</h3>
                <h3>Date: {event.event_date} Time: {event.time}:00</h3>
            </div>
        </Card>



        </div>
    )
}

export default EventCard