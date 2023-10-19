import React from "react";
import { Card, Button } from "antd";

const { Meta } = Card;

function ReservationCard({ reservation }) {
  const { event, tickets } = reservation;

  return (
    <Card
      style={{ height: 400, width: 300 }}
      cover={
        <img
          alt="example"
          src={event.image}
          style={{ "object-fit": "cover", height: "200px" }}
        />
      }
      actions={[<Button>Update</Button>, <Button danger>Cancel</Button>]}
    >
      <Meta title={event.name} description={event.description} />
      <p>
        Date: {event.event_date} Time: {event.time}:00
      </p>
      <p>
        Price: {event.price} Tickets: {tickets}
      </p>
    </Card>
  );
}

export default ReservationCard;
