import React from "react";
import HomepageImage from "../assets/MaskGroup.png";
import AboutUs from "../components/AboutUs";
import Quotes from "../components/Quotes";
import TeamCstm from "../components/TeamCstm";
import OurServicesCstm from "../components/OurServiceCstm";
import GetInTouchCstm from "../components/GetInTouchCstm";
import Planning from "../components/Planning";

export default function Homepage() {
  return (
    <>
      <div className="bg-whitecstm font-raleway my-12">
        <div className="grid grid-cols-2">
          <div className="content-center justify-self-center">
            <p className="text-2xl font-bold text-peachred">\ We Are Here \</p>
            <h1 className="text-5xl font-bold text-darkblue my-4 leading-[58px]">
              Better Insights For <br />
              Business Growth
            </h1>
            <button className="bg-peachred text-whitecstm px-6 py-3 rounded-md font-medium">
              View More
            </button>
          </div>
          <div>
            <img src={HomepageImage} alt="Homepage Image" />
          </div>
        </div>
      </div>
      <AboutUs />
      <Planning/>
      <OurServicesCstm/>
      <TeamCstm />
      <GetInTouchCstm />
      <Quotes />
    </>
  );
}
