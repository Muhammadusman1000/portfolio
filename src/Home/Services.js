import React from "react";
import { BiCodeAlt, BiSolidCrop } from "react-icons/bi";
import { FaAppStore } from "react-icons/fa";

const Services = () => {
  return (
    <section className="h-screen bg-gray-900 pt-56">
      <div className="w-[85%] text-white font-poppins mx-auto">
        <h1 className="text-7xl font-semibold">Services</h1>

        <div className="grid grid-cols-3 mt-20 gap-44 ">
          <div className=" w-full h-[450px] rounded-3xl p-10 bg-gray-800">
            <BiCodeAlt size={80} className="" />
            <p className="text-3xl font-poppins mt-5">Custom Web Development</p>
            <p className="mt-10">
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <p className="mt-10 cursor-pointer">Learn more</p>
          </div>
          <div className=" w-full h-[450px] rounded-3xl p-10 bg-gray-800">
            <BiSolidCrop size={70} />
            <p className="text-3xl font-poppins mt-5">React Web Development</p>
            <p className="mt-10">
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <p className="mt-10 cursor-pointer">Learn more</p>
          </div>
          <div className=" w-full h-[450px] rounded-3xl p-10 bg-gray-800">
            <FaAppStore size={70} />
            <p className="text-3xl font-poppins mt-5">App Development</p>
            <p className="mt-16">
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <p className="mt-10 cursor-pointer">Learn more</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
