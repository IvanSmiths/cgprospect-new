/* eslint-disable @next/next/no-img-element */
import React from "react";
import Img from "../Img";
import constants from "../../utils/constants";
import Link from "next/link";

const HomeAssets = () => {
  return (
    <section className="homepage-assets-cnt">
      <div className="homepage-assets-img-cnt">
        <Img
          classNames="assets-img"
          webp="/images/texture-pebbles.webp"
          src="/images/texture-pebbles.jpg"
          height="360"
          width="640"
          alt="pebbles render"
        />
      </div>
      <div className="homepage-assets-text-cnt">
        <h2 className="medium-font">Assets fro your games and renders</h2>
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
        </ul>
        <Link href="/search?query=">
          <a className="btn">See all the assets</a>
        </Link>
      </div>
    </section>
  );
};

export default HomeAssets;
