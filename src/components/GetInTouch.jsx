import React, { useState } from "react";
import Button from "./Buttons/Button";
import map from "../assets/map.png";
import mail from "../assets/mail.png";
import phoneCall from "../assets/phoneCall.png";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import DOMPurify from "dompurify";

const GetInTouch = ({ bg = "bg-peachred/[.05]", color = "text-darkblue" }) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const sanitizeInput = (value) => DOMPurify.sanitize(value);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: sanitizeInput(value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div className={bg}>
      <div className="md:px-32 px-10 py-24">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-bold text-2xl text-peachred">\ Get In Touch \</h2>
          <div className={color}>
            <h1 className="font-bold text-4xl">Hey! Let's Talk</h1>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-start gap-4 mt-10">
          <form
            action=""
            className="bg-white flex flex-col justify-between p-8 rounded-lg min-h-[500px]"
            onSubmit={handleSubmit}
          >
            <div>
              <input
                type="text"
                placeholder="Name"
                className="border-0 bg-offwhite p-3 rounded-lg w-full mb-4"
                minLength={3}
                name="name"
                value={input.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="border-0 bg-offwhite p-3 rounded-lg w-full mb-4"
                value={input.email}
                name="email"
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="phone"
                inputMode="number"
                placeholder="Phone"
                className="border-0 bg-offwhite p-3 rounded-lg w-full mb-4"
                value={input.phone}
                onChange={handleInputChange}
                required
              />
              <textarea
                type="text"
                name="message"
                placeholder="Your Message"
                style={{ resize: "none" }}
                className="min-h-36 border-0 bg-offwhite p-3 rounded-lg w-full mb-8"
                minLength={5}
                value={input.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex justify-start w-full">
              <Button type={"submit"} text={"Send Now"} />
            </div>
          </form>
          <div className="bg-white flex flex-col justify-between rounded-lg md:p-8 p-4 lg:min-h-[500px] lg:max-h-[500px] min-h-[400px]">
            <div className="flex flex-wrap lg:flex-col flex-row">
              <div className="flex justify-start items-center gap-2 pb-5">
                <img
                  className="bg-offwhite max-w-16 p-4 rounded-md"
                  src={phoneCall}
                  alt=""
                />
                <div className="flex flex-col md:min-w-56 min-w-10 justify-start px-2">
                  <p className="font-bold text-xl text-peachred">
                    Call Anytime
                  </p>
                  <p>+1 356 678 7897</p>
                  <p>+1 356 678 7897</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-2 pb-5">
                <img
                  className="bg-offwhite max-w-16 p-4 rounded-md"
                  src={mail}
                  alt=""
                />
                <div className="flex flex-col md:min-w-56 min-w-10 justify-start px-2">
                  <p className="font-bold text-xl text-peachred">Send Email</p>
                  <p>connect@itfirms.com</p>
                  <p>hello@itfirms.com</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-2 pb-5">
                <img
                  className="bg-offwhite max-w-16 p-5 rounded-md"
                  src={map}
                  alt=""
                />
                <div className="flex flex-col md:min-w-56 min-w-10 justify-start pl-2">
                  <p className="font-bold text-xl text-peachred">Visit Us</p>
                  <p>20 Island Park Road,</p>
                  <p>New Jearsy, New York, USA</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold text-2xl py-5">Follow Us</h1>
              <div className="flex flex-wrap justify-between items-center md:gap-4 gap-2 py-4">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer noopenner"
                >
                  <div className="bg-peachred p-4 text-white text-2xl rounded-md">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer noopenner"
                >
                  <div className="bg-peachred p-4 text-white text-2xl rounded-md">
                    <FaInstagram />
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer noopenner"
                >
                  <div className="bg-peachred p-4 text-white text-2xl rounded-md">
                    <FaFacebookF />
                  </div>
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer noopenner"
                >
                  <div className="bg-peachred p-4 text-white text-2xl rounded-md">
                    <FaTwitter />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
