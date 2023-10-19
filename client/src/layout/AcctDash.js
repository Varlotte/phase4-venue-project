import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import ReservationCard from "../components/ReservationCard";
import { Flex } from "antd";

function AcctDash() {
  const id = window.sessionStorage.getItem("currentUser");
  const [currentAttendee, setCurrentAttendee] = useState(null);

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
          <ReservationCard reservation={reservation} />
        ))}
      </Flex>
    </div>
  );
}

export default AcctDash;
