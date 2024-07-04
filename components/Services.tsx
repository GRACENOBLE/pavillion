import React from "react";
import ServicesCard from "./ServicesCard";
import Container from "./Container";

const Services = () => {
  return (
    <section className="border">
      <Container>
        Services
        <ServicesCard />
      </Container>
    </section>
  );
};

export default Services;
