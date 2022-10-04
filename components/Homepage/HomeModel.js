/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Img from "../Img";

function HomeModel() {
  return (
    <section className="homepage-model-cnt">
      <div className="homepage-model-text-cnt">
        <h2 className="medium-font">Free highpoly 3d models</h2>
        <p>
          Photogrammetry is one of the best workflow in order to create high
          quality pbr textures. It can ensure sharp displacement and normal
          maps, especially with rocks, terrains, wood and other complex shapes.
          CG Prospect textures are baked with extremely <br /> <br />{" "}
          Photogrammetry is one of the best workflow in order to create high
          quality pbr textures. It can ensure sharp displacement and normal
          maps, especially with rocks,
        </p>
        <Link href="/search?query=&category=Texture">
          <a className="btn">See 3d models</a>
        </Link>
      </div>
      <div className="homepage-model-img-cnt">
        <Img
          classNames="homepage-model-img"
          webp="/images/3d-model-avocado.webp"
          src="/images/3d-model-avocado.jpg"
          height="360"
          width="360"
          alt="wood render"
        />
      </div>
    </section>
  );
}

export default HomeModel;
