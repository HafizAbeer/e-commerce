import React from "react";
import shop24 from "../../assets/images/shop24.webp";

const HeroSection = () => {
  return (
    <div className="w-full">
      <img
        className="w-full h-auto object-cover"
        src={shop24}
        alt="shop-online-picture"
      />
    </div>
  );
};

export default HeroSection;
