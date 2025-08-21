import React from "react";

const About = () => {
  return (
    <div className="w-full p-6 md:p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className='font-["Neue_Montreal"] text-[6vw] md:text-[4vw] leading-[7vw] md:leading-[4.5vw] tracking-tight'>
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex flex-col md:flex-row gap-5 border-t border-[#a1b562] pt-10 mt-20">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl sm:text-5xl md:text-7xl">Our approach:</h1>
          <button className="flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-[75vh] overflow-hidden rounded-3xl">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
