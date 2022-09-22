import React from "react";
import "./index.css";

import TopNav from "./TopNav";

const Layout = (props) => {
  return (
    <div className="container">
      <div className="topNavContainer">
        <TopNav />
      </div>
      <div className="contentContainer">
        <div className="leftNavContainer"></div>
        <main className="mainDiv">{props.children}</main>
      </div>
    </div>
  );
};

export default Layout;
