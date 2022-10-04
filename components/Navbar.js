/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import constants from "../utils/constants";
import Search from "./Search";

const Navbar = () => {
  const [isDesktop, setDesktop] = useState(false);
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);

  useEffect(() => {
    if (window.innerWidth > 980) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 980) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);
  return (
    <>
      {isDesktop ? (
        <navbar className="navbar">
          <Link href="/">
            <a>
              <img
                width="140px"
                height="50px"
                src="/images/logo-navbar.svg"
                alt="logo"
              />
            </a>
          </Link>
          <Search id="searchbar-navbar" />
          <ul className="navbar-ul-cnt">
            <li>
              <Link href="/search?">
                <a>Assets</a>
              </Link>
            </li>
            <li>
              <Link href="/search?query=&category=3D+Model">
                <a>3D Models</a>
              </Link>
            </li>
            <li>
              <Link href="/search?query=&category=Texture">
                <a>Textures</a>
              </Link>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.patreon.com/cgprospect"
              >
                Cahoot
              </a>
            </li>
          </ul>
          <ul className="navbar-social-cnt">
            <li>
              <img
                className="icon-social"
                width={constants.IconWidth}
                height={constants.IconWidth}
                src="/images/icon-instagram.svg"
                alt="icon of a texture"
              />
            </li>
            <li>
              <img
                className="icon-social"
                width={constants.IconWidth}
                height={constants.IconWidth}
                src="/images/icon-linkedin.svg"
                alt="icon of a texture"
              />
            </li>
          </ul>
        </navbar>
      ) : (
        <navbar className="navbar">
          <Link href="/">
            <a>
              <img
                width="140px"
                height="50px"
                src="/images/logo-navbar.svg"
                alt="logo"
              />
            </a>
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="big-font" onClick={closeMobileMenu}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="big-font" onClick={closeMobileMenu}>
              <Link href="/search?">
                <a>Assets</a>
              </Link>
            </li>
            <li className="big-font" onClick={closeMobileMenu}>
              <Link href="/search?query=&category=3D+Model">
                <a>3D Models</a>
              </Link>
            </li>
            <li className="big-font" onClick={closeMobileMenu}>
              <Link href="/search?query=&category=Texture">
                <a>Textures</a>
              </Link>
            </li>
            <li className="big-font" onClick={closeMobileMenu}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.patreon.com/cgprospect"
              >
                Cahoot
              </a>
            </li>
            <li className="close-menu" onClick={closeMobileMenu}>
              X
            </li>
            <li className="search-cnt search-cnt-mobile">
              <Search id="searchbar-navbar" />
            </li>
          </ul>
          <div className="close-menu" onClick={handleClick}>
            <svg
              onClick={closeMobileMenu}
              viewBox="0 0 10 80"
              width="40"
              height="20"
            >
              <rect fill="white" width="100" height="10"></rect>
              <rect fill="white" y="30" width="100" height="10"></rect>
              <rect fill="white" y="60" width="100" height="10"></rect>
            </svg>
          </div>
        </navbar>
      )}
    </>
  );
};

export default Navbar;
