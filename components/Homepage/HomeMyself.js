/* eslint-disable @next/next/no-img-element */
import React from "react";
import constants from "../../utils/constants";
import Img from "../Img";

function HomeMyself() {
  return (
    <section className="home-myself-cnt">
      <div className="home-myself-img-cnt">
        <Img
          classNames="home-myself-img"
          webp="/images/photo-of-me.webp"
          src="/images/photo-of-me.jpg"
          height="1817.5"
          width="1211.5"
          alt="me"
        />
      </div>
      <div className="home-myself-text-cnt">
        <h2 className="medium-font">Hello from Ivan Smiths!</h2>
        <p>
          I have built CG Prospect on my own, from the creation of the assets,
          to the coding of the web site. 3D artist specialized in Photogrammetry
          and web developer, i have built this project for putting myself in
          game, and for sharing my stuff and knowledge with other passionated
          people.
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
            <strong>Photogrammetrist</strong>
          </li>
          <li>
            <img
              className="icon"
              width={constants.IconWidth}
              height={constants.IconWidth}
              src="/images/icon-texture.svg"
              alt="icon of a texture"
            />
            <strong>Passionated blender user</strong>
          </li>
          <li>
            <a
              href="https://www.ivansmiths.com"
              target="_blank"
              className="btn"
              rel="noreferrer noopener"
            >
              See my website
            </a>
          </li>
        </ul>
        <ul className="homepage-myself-ul-cnt">
          <li>
            <a
              href="https://www.instagram.com/ivan_smiths/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icon-social"
                width={constants.IconWidth}
                height={constants.IconWidth}
                src="/images/icon-instagram.svg"
                alt="icon of a 3d model"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ivan-fabbri/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icon-social"
                width={constants.IconWidth}
                height={constants.IconWidth}
                src="/images/icon-linkedin.svg"
                alt="icon of a texture"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/IvanSmiths"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icon-social"
                width={constants.IconWidth}
                height={constants.IconWidth}
                src="/images/icon-github.svg"
                alt="icon of a texture"
              />
            </a>
          </li>
          <li></li>
        </ul>
      </div>
    </section>
  );
}

export default HomeMyself;
