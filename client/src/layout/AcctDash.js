import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import ReservationCard from "../components/ReservationCard";
import { Flex, Typography } from "antd";
import { getCurrUser } from "../Helperfuncs";
import Navbar from "./NavBar";

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
      <Navbar/>
      <div className="AccountPage">
        <Typography.Text
        style={{ color: "black", fontSize: 25, fontWeight: "bold" }}
        >Welcome to your dashboard, {currentAttendee.name}!</Typography.Text>
        
        <br/>
        <br/>

        <div className = "AccountDetails">
          <Typography.Text
          style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
          >Account Details:</Typography.Text>
          <br/>
          <Typography.Text
          style={{ color: "black", fontSize: 15, }}
          >Current email: {currentAttendee.email}</Typography.Text>
          <br/>
          <Typography.Text
          style={{ color: "black", fontSize: 15, }}
          >You currently have {currentAttendee.reservations.length} event/s scheduled</Typography.Text>
        </div>
        <br/>
        <br/>
        <br/>
      </div>
        <div className="PersaonalReservationsTitle">
          <Typography.Text
          style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
          >Reserved Events:</Typography.Text>
        </div>
      {/* <Flex gap="middle"> */}
        <div className="PersonalReservations">
          {currentAttendee.reservations.map((reservation) => (
            <ReservationCard
              key={reservation.id}
              reservation={reservation}
              handleDeleteClick={handleDeleteClick}
              handleAddClick={handleAddClick}
              handleRemoveClick={handleRemoveClick}
            />
        ))}
        </div>
      {/* </Flex> */}
    </div>
  );
}

export default AcctDash;