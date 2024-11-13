import React from 'react';
import Header from '../component/Header';
import AboutUs from '../component/AboutUs';
import Team from '../component/Team';
import Quotes from '../component/Quotes';

const About = () => {
  return (
    <>
        <Header title={'About'} />
        <AboutUs />
        <Team />
        <Quotes />
    </>
  );
};

export default About;