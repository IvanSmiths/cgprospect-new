import React from "react";
import Img from "../Img";

function HomeModel() {
  return (
    <section className="homepage-model-cnt">
      <div className="homepage-model-text-cnt">
        <h2 className="medium-font">8K Textures</h2>
        <p>
          Photogrammetry is one of the best workflow in order to create high
          quality pbr textures. It can ensure sharp displacement and normal
          maps, especially with rocks, terrains, wood and other complex shapes.
          CG Prospect textures are baked with extremely
        </p>
      </div>
      <div className="homepage-model-img-cnt">
        <Img
          classNames="homepage-model-img"
          webp="/images/texture-wood.webp"
          src="/images/texture-wood.jpg"
          height="360"
          width="360"
          alt="wood render"
        />
      </div>
    </section>
  );
}

export default HomeModel;
