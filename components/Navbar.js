/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import constants from "../utils/constants";
import Search from "./Search";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
