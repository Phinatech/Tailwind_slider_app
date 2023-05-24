// import React from 'react'
import React from "react";
// import pic from "../../assets/ls1.png";

interface propSlider {
  icons: any;
  tit1: string;
  tit2: string;
  cardButton: string;
}

const SpinnerCard: React.FC<propSlider> = ({
  icons,
  tit1,
  tit2,
  cardButton,
}) => {
  return (
    <div className=" w-[600px] h-[300px] bg-gray-300 flex justify-center rounded-md">
      <div className="w-[50%] flex flex-col justify-center  p-[10px] ">
        <h1 className=" text-xl font-bold mb-[15px]">{tit1}</h1>
        <div className=" mb-[15px]">{tit2}</div>
        <button className="w-[150px] h-[40px] hover:bg-transparent hover:border-orange-400 text-orange-500 hover:text-black">
          {cardButton}
        </button>
      </div>

      <div className="w-[50%] flex justify-center items-center">
        <img className="w-[90%]" src={icons} alt="" />
      </div>
    </div>
  );
};

export default SpinnerCard;
