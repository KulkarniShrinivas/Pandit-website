import React from "react";
import CardList from "../../components/card-list";
import AboutUs from "../../components/AboutUs/AboutUs";
import HowToBook from "../../components/how-to-book";
import Main from "../../components/main";

const Home = () => {
  return (
    <>
      <Main />
      <AboutUs />
      <CardList />
      <HowToBook />
    </>
  );
};

export default Home;
