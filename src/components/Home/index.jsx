import React from "react";
import Comments from "../Comments";
import Contact from "../Contact";
import Hero from "../Hero";
import Prices from "../Prices";
import Services from "../Services";
import Strategies from "../Strategies";
import YouProduct from "../YouProduct";

const Home = () => {
  return (
    <React.Fragment>
      <Hero/>
      <YouProduct/>
      <Services/>
      <Contact/>
      <Strategies/>
      <Prices/>
      <Comments/>
    </React.Fragment>
  )
}

export default Home;
