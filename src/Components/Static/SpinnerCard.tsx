// import React from 'react'
import pic from "../../assets/ls1.png";

const SpinnerCard = () => {
  return (
    <div className=" w-[620px] h-[300px] bg-gray-300 flex justify-center rounded-md">
      <div className="w-[50%] flex flex-col justify-center  p-[10px] ">
        <h1 className=" text-xl font-bold mb-[15px]">Creative Design</h1>
        <div className=" mb-[15px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          doloribus voluptate minima eveniet perferendis! Animi doloremque
          veniam esse commodi sed.
        </div>
        <button className="w-[150px] h-[40px] hover:bg-transparent hover:border-orange-400 text-orange-500 hover:text-black">
          View
        </button>
      </div>

      <div className="w-[50%] flex justify-center items-center">
        <img className="w-[90%]" src={pic} alt="" />
      </div>
    </div>
  );
};

export default SpinnerCard;
