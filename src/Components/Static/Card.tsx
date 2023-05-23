// import React from "react";
// import icon from "../../assets/ls5.png";

interface propsCard {
  iccon: any;
  title1: string;
  tittle2: string;
  cardButton: string;
}

const Card: React.FC<propsCard> = ({ iccon, title1, tittle2, cardButton }) => {
  return (
    <div className="w-[300px] h-[350px] shadow-2xl  flex-col flex justify-around items-center">
      <div className=" w-[100px] h-[90px] flex justify-center items-center bg-gray-300 rounded">
        <img src={iccon} />
      </div>
      <div className=" font-bold">{title1}</div>
      <div className="text-center w-[80%]">{tittle2}</div>
      <button className=" w-[130px] h-[40px] bg-amber-600 ">
        {cardButton}
      </button>
    </div>
  );
};

export default Card;
