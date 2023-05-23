// import React from 'react'

const Headers = () => {
  return (
    <div className="w-full h-[60px] flex justify-center items-center bg-white z-50 fixed bg-gray-200">
      <div className=" w-[90%]  flex justify-between items-center ">
        <div className=" font-extrabold text-2xl text-gray-500">Cypto</div>
        <div className="flex items-center text-base font-bold text-gray-500 cursor-pointer ">
          <nav className="m-5  hover:text-red-300">Hello</nav>
          <nav className="m-5  hover:text-red-300">Hello</nav>
          <nav className="m-5  hover:text-red-300">Hello</nav>
          <nav className="m-5  hover:text-red-300">Hello</nav>
        </div>
        <div className=" ">
          <button className="w-[130px] h-[40px] bg-slate-400 text-gray-500 bg-transparent border-gray-500  hover:bg-white hover:text-red-300 hover:transition-transform mr-3">
            Get started
          </button>
          <button className="w-[130px] h-[40px] bg-gray-500 text-white border-gray-500  hover:bg-white hover:text-red-300 hover:transition-transform">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Headers;
