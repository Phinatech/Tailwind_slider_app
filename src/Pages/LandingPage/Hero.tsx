// import React from "react";
// import pic from "../../assets/iphone.png";

const Hero = () => {
  return (
    <div className="w-[100%] min-h-[calc(100vh-5px)] flex justify-center bg-hero bg-no-repeat bg-cover relative bg-fixed ">
      <div className="absolute w-full h-[100%] opacity-[0.7] bg-black "></div>
      <div className="w-[90%] flex z-10">
        <div className=" w-[50%] flex flex-col mt-20 ">
          <div className="mt-[100px]  mb-5 text-7xl font-extrabold text-white">
            Passion For Design
          </div>
          <div className="my-5 text-l w-[400px] text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos optio
            et illo ex eius placeat deleniti at ea nemo quod.
          </div>
          <button className="w-[200px] h-[50px] bg-slate-400 text-white mt-5 outline-none">
            Get Started
          </button>
        </div>
        {/* <div className=" w-[50%] mt-20">
          <img src={pic} alt="" className="h-[95%]" />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
