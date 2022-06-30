/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import constants from "../../utils/constants";
import Img from "../Img";

function HomeFreeAssets() {
  return (
    <section className="home-free-3d-models-cnt">
      <Img
        classNames="home-img-full"
        webp="/images/3d-model-peach.webp"
        src="/images/3d-model-peach.jpg"
        height="1080"
        width="1920"
        alt="peach 3d model"
      />
      <div className="home-free-3d-models-text-cnt">
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
            <Link href="/search?query=">
              <a className="btn">See free assets</a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default HomeFreeAssets;
