import React from "react";
import classes from "./Header.module.css";
// import classes from "./navbar.module.css";

const Header = () => {
  return (
    <div className={classes.mainHeader}>
      <p className={`classes.mainHeader > p`}>
        Wellcome to!{" "}
        <span className={classes.bold}>SHINING STAR PORTFOLIO</span>
      </p>
    </div>
  );
};

export default Header;
