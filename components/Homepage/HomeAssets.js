import React from "react";
import Img from "../Img";

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
        <h2 className="medium-font">Free highpoly 3d models</h2>
        <p>
          Photogrammetry is one of the best workflow in order to create high
          quality pbr textures. It can ensure sharp displacement and normal
          maps, especially with rocks, terrains, wood and other complex shapes.
          CG Prospect textures are baked with extremely
        </p>
      </div>
    </section>
  );
};

export default HomeAssets;
