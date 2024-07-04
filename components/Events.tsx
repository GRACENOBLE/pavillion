import React from "react";
import EventsCard from "./EventsCard";
import Container from "./Container";

const Events = () => {
  return (
    <section className="border">
      <Container>
        Events
        <EventsCard />
      </Container>
    </section>
  );
};

export default Events;
