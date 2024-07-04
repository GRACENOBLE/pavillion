import React from "react";
import FeaturedArticleCard from "./FeaturedArticleCard";
import Container from "./Container";

const Featured = () => {
  return (
    <section>
      <Container>
        Featured Articles
        <FeaturedArticleCard />
      </Container>
    </section>
  );
};

export default Featured;
