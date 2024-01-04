import React from "react";
import GithubIcon from "../../../public/github-icon3.svg";
import LinkedinIcon from "../../../public/linkedin-icon2.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Not currently looking for new opportunites but feel free to send an
          email.
        </p>
        <div className="socials flex flex-row gap-4">
          <Link href="https://github.com/tijgee" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/timgee/" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-4">
          <label
            htmlFor="email"
            className="text-white block mb-2 text-sm font-medium"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block full p-2.5 "
            placeholder="example@gmail.com"
          />
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
