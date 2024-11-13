import React from "react";
import Header from "../component/Header";
import GetInTouch from "../component/GetInTouch";
import Quotes from "../component/Quotes";

const Contact = () => {
  return (
    <>
      <Header title={"Contact"} />
      <GetInTouch />
      <Quotes />
    </>
  );
};

export default Contact;