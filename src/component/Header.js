import React from "react";

const Header = () => {
  return (
    <header className="Header">
      <div className="hd_wrap">
        <h1>
          <a href="/">
            <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="logo" />
          </a>
        </h1>
        <button className="menu_toggle">
            <i className="xi-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
