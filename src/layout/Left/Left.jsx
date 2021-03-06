import React from "react";
import "./Left.scss";

import Logo from "../../components/Logo/Logo";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
import LeftBottom from "../../components/LeftBottom/LeftBottom";

const Left = () => {
  return (
    <div className="Left">
      <Logo />
      <LeftMenu />
      <LeftBottom />
    </div>
  );
};

export default Left;
