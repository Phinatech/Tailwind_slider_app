// import React from 'react'
import pic from "../../assets/ls1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slidling = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoPlay: true,
    autoPlaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <div className=" w-full h-[60vh] flex justify-center items-center bg-orange-200 overflow-hidden">
      <div className=" w-[94%] h-[98%] flex justify-between items-center">
        <div className=" w-[650px] m-5 h-[330px] bg-gray-300 flex justify-center rounded-md">
          <div className="w-[50%] flex flex-col justify-center  p-[10px] ">
            <h1 className=" text-xl font-bold mb-[15px]">Creative Design</h1>
            <div className=" mb-[15px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate doloribus voluptate minima eveniet perferendis! Animi
              doloremque veniam esse commodi sed.
            </div>
            <button className="w-[150px] h-[40px] hover:bg-transparent hover:border-orange-400 text-orange-500 hover:text-black">
              View
            </button>
          </div>

          <div className="w-[50%] flex justify-center items-center">
            <img className="w-[90%]" src={pic} alt="" />
          </div>
        </div>
        {/* styling starts from here */}
        <div className=" w-[650px] m-5 h-[330px] bg-gray-300 flex justify-center rounded-md">
          <div className="w-[50%] flex flex-col justify-center  p-[10px] ">
            <h1 className=" text-xl font-bold mb-[15px]">Creative Design</h1>
            <div className=" mb-[15px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate doloribus voluptate minima eveniet perferendis! Animi
              doloremque veniam esse commodi sed.
            </div>
            <button className="w-[150px] h-[40px] hover:bg-transparent hover:border-orange-400 text-orange-500 hover:text-black">
              View
            </button>
          </div>

          <div className="w-[50%] flex justify-center items-center">
            <img className="w-[90%]" src={pic} alt="" />
          </div>
        </div>

        <div className=" w-[650px] m-5 h-[330px] bg-gray-300 flex justify-center rounded-md">
          <div className="w-[50%] flex flex-col justify-center  p-[10px] ">
            <h1 className=" text-xl font-bold mb-[15px]">Creative Design</h1>
            <div className=" mb-[15px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate doloribus voluptate minima eveniet perferendis! Animi
              doloremque veniam esse commodi sed.
            </div>
            <button className="w-[150px] h-[40px] hover:bg-transparent hover:border-orange-400 text-orange-500 hover:text-black">
              View
            </button>
          </div>

          <div className="w-[50%] flex justify-center items-center">
            <img className="w-[90%]" src={pic} alt="" />
          </div>
        </div>
      </div>
      {/* <div>
          <SpinnerCard
            icons={pic}
            tit1="Create more idea"
            tit2="  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quas qui dicta! Error accusantium provident, dignissimos nisi nam voluptatum quae."
            cardButton="Click"
          />
        </div> */}
      {/* <div>
          <SpinnerCard
            icons={pic}
            tit1="Create more idea"
            tit2="  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quas qui dicta! Error accusantium provident, dignissimos nisi nam voluptatum quae."
            cardButton="Click"
          />
        </div> */}
      {/* <div>
          <SpinnerCard
            icons={pic}
            tit1="Create more idea"
            tit2="  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quas qui dicta! Error accusantium provident, dignissimos nisi nam voluptatum quae."
            cardButton="Click"
          />
        </div> */}
    </div>
  );
};

export default Slidling;
