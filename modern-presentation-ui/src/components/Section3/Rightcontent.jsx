import React from "react";
import { ShoppingCart, TrendingUp } from "lucide-react";

const Rightcontent = () => {
  return (
    <div className="w-1/2 h-full flex justify-center items-center">

      <div className="relative w-105 h-95">

        {/* Top Image */}
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900"
          alt=""
          className="absolute top-0 left-0 w-70 h-52.5 rounded-4xl object-cover"
        />

        {/* Green Card */}
        <div className="absolute top-0 right-0 w-35 h-35 bg-lime-300 rounded-4xl flex flex-col justify-center items-center p-4">

          <ShoppingCart size={34} />

          <p className="text-center text-xs leading-5 font-medium mt-3">
            Trends of moving
            <br />
            from retail to e-Tail
          </p>

        </div>

        {/* Bottom Image */}
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900"
          alt=""
          className="absolute bottom-0 right-0 w-70 h-52.5 rounded-4xl object-cover"
        />

        {/* Blue Card */}
        <div className="absolute bottom-0 left-0 w-35 h-35 bg-blue-500 rounded-4xl flex flex-col justify-center items-center text-white p-4">

          <TrendingUp size={34} />

          <p className="text-center text-sm font-semibold leading-6 mt-3">
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