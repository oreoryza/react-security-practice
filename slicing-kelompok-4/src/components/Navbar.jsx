import React from "react";
import logo from "../assets/Vector.png";

export default function Navbar() {
  return (
    <nav className="bg-whitecstm font-raleway">
      <div className="text-white flex justify-around">
        <div className="flex space-x-2">
          <img src={logo} alt="Logo" />
          <h1 className="text-darkblue text-3xl font-bold">Logoipsum</h1>
        </div>
        <ul className="text-darkblue text-base font-semibold flex items-center space-x-4">
          <li>About</li>
          <li>Our Services</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Contact</li>
          <li className="ml-8">
            <button className="bg-peachred px-4 py-2 ml-8 text-whitecstm rounded-md font-medium">
              Get In Touch
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
