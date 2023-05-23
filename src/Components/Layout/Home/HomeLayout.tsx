// import React from 'react'
import { Outlet } from "react-router-dom";

import Headers from "../../Static/Headers";
import Footer from "../../Static/Footer";

const HomeLayout = () => {
  return (
    <div>
      <Headers />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
