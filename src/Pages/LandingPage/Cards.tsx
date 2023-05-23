// import React from 'react'
import icon from "../../assets/ls5.png";

import Card from "../../Components/Static/Card";

const Cards = () => {
  return (
    <div className="w-full h-[70vh] flex justify-center items-center">
      <div className="w-[96%] flex justify-around items-center">
        <Card
          iccon={icon}
          title1="WEB DEVELOPMENT"
          tittle2="Ijhffw jkf kqDFJAB UIWUFUWikfwbd hfvywh hyfiusu"
          cardButton="Discover More"
        />
        <Card
          iccon={icon}
          title1="WEB DEVELOPMENT"
          tittle2="Ijhffw jkf kqDFJAB UIWUFUWikfwbd hfvywh hyfiusu"
          cardButton="Discover More"
        />
        <Card
          iccon={icon}
          title1="WEB DEVELOPMENT"
          tittle2="Ijhffw jkf kqDFJAB UIWUFUWikfwbd hfvywh hyfiusu"
          cardButton="Discover More"
        />
        <Card
          iccon={icon}
          title1="WEB DEVELOPMENT"
          tittle2="Ijhffw jkf kqDFJAB UIWUFUWikfwbd hfvywh hyfiusu"
          cardButton="Discover More"
        />
      </div>
    </div>
  );
};

export default Cards;
