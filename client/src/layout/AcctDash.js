import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import ReservationCard from "../components/ReservationCard";
import { Flex } from "antd";
import { getCurrUser } from "../Helperfuncs";

function AcctDash() {
  const id = getCurrUser();
  const [currentAttendee, setCurrentAttendee] = useState(null);

  const handleDeleteClick = (reservationId) => {
    console.log(reservationId);
    fetch(`/reservations/${reservationId}`, { method: "DELETE" })
      .then(() => alert("Delete successful"))
      .then(() =>
        setCurrentAttendee((prevData) => {
          return {
            ...prevData,
            reservations: prevData.reservations.filter(
              (reservation) => reservation.id !== reservationId
            ),
          };
        })
      );
  };

  const handleAddClick = (reservationId, currTickets) => {
    console.log(reservationId);
    fetch(`/reservations/${reservationId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tickets: currTickets + 1 }),
    })
      .then(() => alert("PATCH Success"))
      .then(() =>
        setCurrentAttendee((prevData) => {
          return {
            ...prevData,
            reservations: prevData.reservations.map((reservation) => {
              if (reservation.id !== reservationId) return reservation;
              return {
                ...reservation,
                tickets: currTickets + 1,
              };
            }),
          };
        })
      );
  };

  const handleRemoveClick = (reservationId, currTickets) => {
    console.log(reservationId);
    fetch(`/reservations/${reservationId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tickets: currTickets - 1 }),
    })
      .then(() => alert("PATCH Success"))
      .then(() =>
        setCurrentAttendee((prevData) => {
          return {
            ...prevData,
            reservations: prevData.reservations.map((reservation) => {
              if (reservation.id !== reservationId) return reservation;
              return {
                ...reservation,
                tickets: currTickets - 1,
              };
            }),
          };
        })
      );
  };

  useEffect(() => {
    if (!id) return;
    fetch(`/attendees/${id}`)
      .then((r) => r.json())
      .then((attendee) => {
        setCurrentAttendee(attendee);
      });
  }, [id]);

  console.log(currentAttendee);

  if (!id) {
    return <Redirect to="/login" />;
  }
  if (!currentAttendee) return null;

  return (
    <div>
      <h1>Welcome to your dashboard, {currentAttendee.name}!</h1>
      <h2>Your email on file is {currentAttendee.email}</h2>
      <h2>Your current reservations are</h2>
      <Flex gap="middle">
        {currentAttendee.reservations.map((reservation) => (
          <ReservationCard
            key={reservation.id}
            reservation={reservation}
            handleDeleteClick={handleDeleteClick}
            handleAddClick={handleAddClick}
            handleRemoveClick={handleRemoveClick}
          />
        ))}
      </Flex>
    </div>
  );
}

export default AcctDash;
