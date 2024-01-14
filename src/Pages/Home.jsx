import React from 'react';
import Header from '../Components/Header/Header';
import Footer from "../Components/Footer/Footer";
import TasteMaker from "../Components/TasteMaker/TasteMaker";
import HighFlyer from "../Components/HighFlyer/HighFlyer";
import Executive from "../Components/Executive/Executive";
import Benefits from "../Components/Benefits/Benefits";


const Home = () => {
  return (
    <div>
        <Header title="No Limits" />
        <TasteMaker />
      <HighFlyer />
      <Benefits />
      <Executive />
      <Footer />
    </div>
  )
};

export default Home;
