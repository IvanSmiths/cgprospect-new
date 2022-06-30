/* eslint-disable @next/next/no-img-element */
import React from "react";
import Img from "../Img";
import constants from "../../utils/constants";
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
        <ul className="homepage-assets-ul-cnt">
          <li>
            <img
              className="icon"
              width={constants.IconWidth}
              height={constants.IconWidth}
              src="/images/icon-3d-model.svg"
              alt="icon of a 3d model"
            />
            <strong>Photogrammetry is awesome </strong>
          </li>
          <li>
            <img
              className="icon"
              width={constants.IconWidth}
              height={constants.IconWidth}
              src="/images/icon-texture.svg"
              alt="icon of a texture"
            />
            <strong>Free texture yeah!</strong>
          </li>
          <li>
            <Link href="/search?query=&category=Texture">
              <a className="btn">See textures</a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomeAssets;
