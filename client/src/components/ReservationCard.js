import React from "react";
import { Card, Button, Icons } from "antd";

const { Meta } = Card;

function ReservationCard({ reservation, handleDeleteClick, handleAddClick }) {
  const { event, tickets } = reservation;
  console.log(reservation);

  return (
    <Card
      style={{ height: 400, width: 300 }}
      cover={
        <img
          alt="example"
          src={event.image}
          style={{ objectFit: "cover", height: "200px" }}
        />
      }
      actions={[
        <Button onClick={() => handleAddClick(reservation.id, tickets)}>
          + Tickets
        </Button>,
        <Button>- Tickets</Button>,
        <Button danger onClick={() => handleDeleteClick(reservation.id)}>
          Cancel
        </Button>,
      ]}
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
