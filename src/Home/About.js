import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div
      className="w-full mx-auto bg-gray-900  h-screen flex justify-between z-20"
      id="2"
    >
      <div className="w-[40%]  relative flex justify-center items-center">
        <img
          src="mypic.png"
          alt=""
          className="bg-gray-800 rounded-3xl pt-56 w-[70%]"
        />
      </div>
      <div className="w-[60%] text-white font-poppins flex justify-center items-center">
        <div className="w-[90%] h-[70%] ">
          <h1 className="text-5xl font-semibold">About me</h1>
          <p className="mt-5 text-gray-400">
            As a proficient React JS developer, I excel in translating concepts
            into interactive user interfaces. With a strong command of state
            management and component-driven architecture, I am committed to
            delivering seamless web experiences that exceed expectations. I am
            eager to contribute my skills to your project and collaborate on
            crafting a user-centric digital solution. Let's connect and turn
            ideas into reality.
          </p>
          <section className="text-white font-poppins mt-10 w-[300px] relative">
            <div className="flex justify-between">
              <Link to="skills">
                <p className="py-2 relative after:contents-[''] after:w-0 after:h-[4px] after:bg-[#E41E8F] after:absolute after:bottom-0 after:left-0 hover:after:w-full hover:after:transition-all after:transition-all after:duration-500">
                  Skills
                </p>
              </Link>
              <Link to="experience">
                <p className="py-2 relative after:contents-[''] after:w-0 after:h-[4px] after:bg-[#E41E8F] after:absolute after:bottom-0 after:left-0 hover:after:w-full hover:after:transition-all after:transition-all after:duration-500">
                  Experience
                </p>
              </Link>
              <Link to="education">
                <p className="py-2 relative after:contents-[''] after:w-0 after:h-[4px] after:bg-[#E41E8F] after:absolute after:bottom-0 after:left-0 hover:after:w-full hover:after:transition-all after:transition-all after:duration-500">
                  Education
                </p>
              </Link>
            </div>

            <Outlet />
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
