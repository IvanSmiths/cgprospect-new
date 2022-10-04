/* eslint-disable @next/next/no-img-element */
import React from "react";
import Img from "../Img";
import Link from "next/link";

const HomeAssets = () => {
  return (
    <section className="homepage-texture-cnt">
      <div className="homepage-texture-img-cnt">
        <Img
          classNames="texture-img"
          webp="/images/texture-wood.webp"
          src="/images/texture-wood.jpg"
          height="360"
          width="640"
          alt="wood render"
        />
      </div>
      <div className="homepage-texture-text-cnt">
        <h2 className="medium-font">Texture for your games and renders</h2>
        <p>
          Photogrammetry is one of the best workflow in order to create high
          quality pbr textures. It can ensure sharp displacement and normal
          maps, especially with rocks, terrains, wood and other complex shapes.
          CG Prospect textures are baked with extremely
        </p>
        <Link href="/search?query=&category=Texture">
          <a className="btn">See textures</a>
        </Link>
      </div>
    </section>
  );
};

export default HomeAssets;
