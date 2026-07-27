import React from "react";
import { ShoppingCart, TrendingUp } from "lucide-react";

const Rightcontent = () => {
  return (
    <div className="w-1/2 h-full flex justify-center items-center">

      <div className="relative w-130 h-130">

        {/* Top Left Image */}
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900"
          alt=""
          className="absolute top-0 left-0 w-80 h-62.5 rounded-[2.2rem] object-cover"
        />

        {/* Green Card */}
        <div className="absolute top-0 right-0 w-42.5 h-42.5 bg-lime-300 rounded-[2.2rem] flex flex-col justify-center items-center px-5 z-20">

          <ShoppingCart size={40} strokeWidth={2.2} />

          <p className="text-center text-base font-medium mt-5 leading-6">
            Trends of moving
            <br />
            from retail to e-Tail
          </p>

        </div>

        {/* Bottom Right Image */}
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900"
          alt=""
          className="absolute bottom-0 right-0 w-82.5 h-72.5 rounded-[2.2rem] object-cover"
        />

        {/* Blue Card */}
        <div className="absolute left-0 bottom-0 w-47.5 h-47.5 bg-blue-500 rounded-[2.2rem] flex flex-col justify-center items-center text-white px-5 z-20">

          <TrendingUp size={38} strokeWidth={2.2} />

          <p className="text-center text-lg font-semibold mt-5 leading-7">
            Fast-growing
            <br />
            market segment
          </p>

        </div>

      </div>

    </div>
  );
};

export default Rightcontent;