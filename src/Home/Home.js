import React from "react";

const Home = () => {
  return (
    <div>
      <div
        className="w-full h-screen bg-gray-900 flex justify-between p-8 relative"
        id="/"
      >
        {/* -----------first grid detail grid--------------- */}
        <div className="w-[60%] h-full pt-16 flex justify-center items-center ">
          <div className="w-5/6 h-5/6 px-16 ">
            <p className="text-white text-3xl mt-16">UI / UX Developer</p>
            <p className="text-6xl text-white mt-20 font-poppins font-bold">
              <span className="text-[#E41E8F]">Hi,</span> i'm Muhammad
            </p>
            <p className="text-6xl text-white mt-10 font-poppins font-bold">
              Usman From <span className="text-[#E41E8F]">Pakistan</span>
            </p>
          </div>
        </div>
        {/* -------------picture grid-------------- */}
        <div className="w-[40%] h-full">
          <img src="mypic.png" alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
