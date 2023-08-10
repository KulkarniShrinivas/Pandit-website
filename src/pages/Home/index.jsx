import React from "react";
import CardList from "../../components/card-list";
import AboutUs from "../../components/AboutUs/AboutUs";
import HowToBook from "../../components/how-to-book";
import Main from "../../components/main";
import RangeOfServices from "../../components/range-of-services";

const Home = () => {
  return (
    <>
      <Main />
      <RangeOfServices />
      <AboutUs />
      <CardList />
      <HowToBook />
    </>
  );
};

export default Home;
