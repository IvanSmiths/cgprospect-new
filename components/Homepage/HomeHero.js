import Search from "../Search";
import Link from "next/link";

const HomeHero = () => {
  return (
    <header className="header-home-cnt">
      <h1 className="big-font">
        Free 3D Models, <br />
        Free Textures, <br />
        No limits.
      </h1>

      <Search id="searchbar-home" />
      <ul className="home-searchbar-suggested">
        <li className="main-font-color">Suggested:</li>
        <li className="sec-font-color">
          <Link href={`https://www.cgprospect.com/search?query=pebbles`}>
            <a>Pebbles, </a>
          </Link>
        </li>
        <li className="sec-font-color">
          <Link href={`https://www.cgprospect.com/search?query=rock`}>
            <a>Rock, </a>
          </Link>
        </li>
        <li className="sec-font-color">
          <Link href={`https://www.cgprospect.com/search?query=apple`}>
            <a>Apple, </a>
          </Link>
        </li>
        <li className="sec-font-color">
          <Link href={`https://www.cgprospect.com/search?query=lemon`}>
            <a>Lemon, </a>
          </Link>
        </li>
        <li className="sec-font-color">
          <Link href={`https://www.cgprospect.com/search?query=terrain`}>
            <a>Terrain, </a>
          </Link>
        </li>
      </ul>

      <p>
        Up to 8K, seamless pbr textures and low-poly/high-poly 3d models totally
        free to download. Use them in your renders, movies or games without any
        worries. No limits, no paywall,{" "}
        <a className="main-color" href="https://www.patreon.com/cgprospect">
          donate if you like to.
        </a>
      </p>
    </header>
  );
};

export default HomeHero;
