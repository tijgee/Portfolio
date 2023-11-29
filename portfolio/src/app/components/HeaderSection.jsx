"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeaderSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Tim", 1000, "Web Developer", 1000, "Racist", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-4">
            Passionate programmer dedicated to creating innovative and
            user-centric solutions.
          </p>

          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple500 to-pink-500 hover:bg-slate-200 text-white">
              Contact Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white border mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                View CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-8">
          <Image
            src="/images/avatar.jpeg"
            alt="avatar image"
            width={200}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
