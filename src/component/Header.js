import React, { useEffect, useRef } from "react";

const Header = () => {
  const HL = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let sct = window.scrollY;
      sct > 0
        ? HL.current.classList.add("on")
        : HL.current.classList.remove("on");
    });
  });
  return (
    <header className="Header" ref={HL}>
      <div className="hd_wrap">
        <div className="container">
          <h1>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
                alt="logo"
              />
            </a>
          </h1>
          <button className="menu_toggle">
            <i className="xi-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
