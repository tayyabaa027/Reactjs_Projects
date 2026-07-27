import React from "react";
import { ArrowRight, CircleAlert } from "lucide-react";

const Leftcontent = () => {
  return (
    <div className="w-1/2 h-full flex flex-col justify-center ">

      <div className="flex items-center gap-2 mb-6">
        <h1 className=" font-extrabold text-5xl ">The</h1>

        <span className="bg-lime-300 rounded-full px-5 py-3 text-5xl font-extrabold">
          opportunity
        </span>
      </div>

      <p className="text-gray-500 text-xl leading-9 mb-8">
        Our deep experience in credit products, advanced proprietary payment
        and information technologies, and successful collaborations with XXX
        clients globally position us to succeed.
      </p>

      <p className="text-gray-500 text-xl leading-9 mb-16">
        Combined with favorable market trends, we are confident in our ability
        to build a unique platform for SMEs in Lorem.
      </p>

      <div className="flex items-center">

        <div className="bg-black w-14 h-14 rounded-full flex justify-center items-center text-white">
          <CircleAlert size={26} />
        </div>

        <div className="w-28 h-4 bg-gray-200"></div>

        <div className="bg-gray-100 w-14 h-14 rounded-full flex justify-center items-center">
          <ArrowRight size={28} />
        </div>

      </div>

    </div>
  );
};

export default Leftcontent;