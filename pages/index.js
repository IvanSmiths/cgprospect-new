/* eslint-disable @next/next/no-img-element */

import Search from "../components/Search";

export default function Home() {
  return (
    <>
      <header className="cnt-header-home">
        <h1>
          3D Models, <br />
          8K Textures, <br />
          All for free.
        </h1>
        <Search />
      </header>
    </>
  );
}
