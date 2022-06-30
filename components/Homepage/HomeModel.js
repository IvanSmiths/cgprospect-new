/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import constants from "../../utils/constants";
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
              <a className="btn">See 3d models</a>
            </Link>
          </li>
        </ul>
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
