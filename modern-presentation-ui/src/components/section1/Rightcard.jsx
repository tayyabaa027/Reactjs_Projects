import React from "react";
import { MoveRight } from "lucide-react";


const Rightcard = (props) => {
  return (
    <div className="relative w-[250px] h-[450px] rounded-3xl shrink-0 overflow-hidden">

      {/* Background Image */}
      <img
        src={props.img}
        alt="Customer"
        className="w-full h-full object-cover blur-[1px] scale-110"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Number */}
      <div className="absolute top-5 left-5 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold">
        {props.id}
      </div>

      {/* Content */}
      <div className=" absolute bottom-6 left-6 right-6 text-white">
        <p className="text-lg font-semibold leading-7 max-w-[240px]">
          {props.intro}
        </p>

        <div className="mt-6 flex items-center gap-5">
  <button className="flex-1 bg-blue-600 py-3 rounded-full font-medium">
    {props.status}
  </button>

  <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
    <MoveRight size={18} strokeWidth={3} />
  </button>
</div>
      </div>
    </div>
  );
};

export default Rightcard;