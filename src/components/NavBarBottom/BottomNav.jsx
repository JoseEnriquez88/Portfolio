"use client";
import NavbarBottom from "./NavbarBottom";
import { useState, useLayoutEffect } from "react";

const BottomNav = () => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const showNav = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    showNav();
    window.addEventListener("resize", showNav);

    return () => {
      window.removeEventListener("resize", showNav);
    };
  }, []);

  return <div>{isMobile && <NavbarBottom />}</div>;
};

export default BottomNav;
