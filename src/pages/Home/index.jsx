import React from "react";
import CardList from "../../components/card-list";
import AboutUs from "../../components/AboutUs/AboutUs";
import HowToBook from "../../components/how-to-book";

const Home = () => {
  return (
    <>
      <AboutUs />
      <CardList />
      <HowToBook />
    </>
  );
};

export default Home;
