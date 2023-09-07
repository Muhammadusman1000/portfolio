import React from "react";

const Portfolio = () => {
  return (
    <section className="h-screen bg-gray-900 pt-56">
      <div className="w-[85%] text-white font-poppins mx-auto">
        <h1 className="text-7xl font-semibold">Portfolio</h1>

        <div className="grid grid-cols-3 mt-20 gap-44 ">
          <div className=" w-full h-[450px] bg-gray-800">
            <img src="work1.png" alt="" className="w-full h-full rounded-3xl" />
          </div>
          <div className=" w-full h-[450px] bg-gray-800">
            <img src="work2.png" alt="" className="w-full h-full rounded-3xl" />
          </div>
          <div className=" w-full h-[450px] bg-gray-800">
            <img src="work3.png" alt="" className="w-full h-full rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
