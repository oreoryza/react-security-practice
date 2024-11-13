import React from 'react';
import ServiceTeamWork from '../assets/ServiceTeamWork.png';

const OurServices = ({ button }) => {
  return (
    <>
      <div className="font-raleway">
        {/* What We Do Section */}
        <section className="flex flex-col md:flex-row items-center mb-12 bg-offwhite py-20 md:px-24 px-10 gap-8">
          {/* Left Column: Image */}
          <div className="md:w-1/2">
            <img src={ServiceTeamWork} alt="Team working together" className="w-full h-auto rounded-lg shadow-lg" />
          </div>

          {/* Right Column: Text */}
          <div className="md:w-1/2">
            <h2 className="text-xl text-peachred font-semibold mb-2">\ What We Do \</h2>
            <h1 className="text-4xl font-bold text-darkblue mb-4">
              We Develop Products That <br /> People Love to Use.
            </h1>
            <p className="text-gray-600 mb-6">
              It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout.
            </p>
            <div className="flex gap-6 md:flex-row flex-col">
              {/* Vision Box */}
              <div className="p-4 bg-[#FFFFFF] rounded-lg shadow-md flex items-center">
                <div className="bg-[#ffe8ef] p-5 rounded-lg text-peachred mr-5">
                  {/* Gunakan gambar di sini */}
                  <img src="/src/assets/ServiceVision.png" alt="Our Vision" className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-red-500">Our Vision</p>
                  <p className="text-gray-600">It is a long established fact that</p>
                </div>
              </div>
              {/* Goal Box */}
              <div className="p-4 bg-[#FFFFFF] rounded-lg shadow-md flex items-center">
                <div className="bg-[#ffe8ef] p-5 rounded-lg text-peachred mr-5">
                  <img src="/src/assets/ServiceGoal.png" alt="Our Goal" className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-red-500">Our Goal</p>
                  <p className="text-gray-600">It is a long established fact that</p>
                </div>
              </div>
            </div>
            {button}
          </div>
        </section>

        {/* Services Section */}
        <section className="text-center">
          <h2 className="text-xl text-peachred font-semibold mb-2">\ Services \</h2>
          <h1 className="text-3xl font-bold text-darkblue mb-10">Our Expertise</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Each card for the services */}
            <ServiceCard imgSrc="/src/assets/ServiceWebDesign.png" title="Web Design / Development" />
            <ServiceCard imgSrc="/src/assets/ServiceUiUx.png" title="UI/UX Design" />
            <ServiceCard imgSrc="/src/assets/ServiceWebsite.png" title="Website Migration" />
            <ServiceCard imgSrc="/src/assets/ServiceApp.png" title="App Development" />
            <ServiceCard imgSrc="/src/assets/ServiceHubSpot.png" title="HubSpot Integration" />
            <ServiceCard imgSrc="/src/assets/ServiceEmail.png" title="Email Marketing" />
          </div>
        </section>
      </div>
    </>
  );
};


// ServiceCard Component
const ServiceCard = ({ imgSrc, title }) => (
  <div className="p-6 bg-offwhite rounded-lg shadow-md hover:shadow-xl transition duration-300 w-90 h-80 mx-auto">
    <div className="flex items-center justify-center w-16 h-16 mb-4 bg-[#FFFFFF] rounded-md">
      <img src={imgSrc} alt={title} className="w-12 h-12" />
    </div>
    <h3 className="text-xl font-bold text-darkblue mb-2 text-left">{title}</h3>
    <div className="flex items-center gap-2 mb-4">
      <div className="w-14 h-1 bg-peachred"></div>
      <div className="w-4 h-1 bg-peachred"></div>
    </div>
    <p className="text-gray-600 text-left">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    </p>
  </div>
);

export default OurServices;

