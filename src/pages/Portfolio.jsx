import React, {useState, useEffect} from "react";
import NothingGreat from "../assets/NothingGreat.png";
import MoreThan from "../assets/MoreThan.png";
import EnjoyWith from "../assets/EnjoyWith.png";
import TheMost from "../assets/TheMost.png";
import AvailableBalance from "../assets/AvailableBalance.png";
import Header from "../components/Header";
import Quotes from "../components/Quotes";

export default function Portfolio() {
  const [activeImage, setActiveImage] = useState("");
  const [activeButton, setActiveButton] = useState(null);

  // IMAGES PER BUTTON OR GENRE
  const images = {
    ALL: [NothingGreat, MoreThan, EnjoyWith, TheMost, AvailableBalance],
    LIFE: [MoreThan, EnjoyWith, TheMost],
    MOMENTS: [NothingGreat, MoreThan, EnjoyWith],
    NATURE: [NothingGreat, MoreThan],
    STORIES: [EnjoyWith, TheMost, AvailableBalance],
    TRAVEL: [NothingGreat, TheMost],
  };

  const handleButtonClick = (buttonName) => {
    setActiveImage(images[buttonName]);
    setActiveButton(buttonName)
  };

  // DEFAULT BUTTON ALL
  useEffect(() => {
    handleButtonClick("ALL");
  }, []);

  return (
    <>
      <Header title={"Portfolio"} />
      <div className="bg-whitecstm font-raleway text-center mt-24 md:px-32 px-10">
        <p className="text-2xl font-bold text-peachred">\ Portfolio \</p>
        <h1 className="text-darkblue text-4xl font-bold mt-2">Our Work</h1>
        <div className="mt-16 text-blackshade/50 text-sm font-semibold md:rounded-full rounded-lg w-fit mx-auto">
          {Object.keys(images).map((button) => (
            <button
            key={button}
            className={`px-6 py-3 rounded-full overflow-hidden ${activeButton === button ? 'bg-darkblue text-whitecstm' : 'border-blackshade/50'} hover:bg-darkblue hover:text-whitecstm transition-colors duration-300`}
            onClick={() => handleButtonClick(button)}
          >
            {button}
          </button>
          ))}
        </div>
        {activeImage.length > 0 && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4">
            {activeImage.map((image, index) => (
              <img key={index} src={image} alt={`Portfolio ${index}`} className="w-full rounded-md hover:scale-105 transition-transform duration-300" />
            ))}
          </div>
        )}
      </div>
      <Quotes />
    </>
  );
}