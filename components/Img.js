/* eslint-disable @next/next/no-img-element */
import React from "react";

function Img({ src, webp, alt, height, width, classNames, ...delegated }) {
  return (
    <picture className={classNames}>
      <source
        alt={alt}
        decoding={"async"}
        loading={"lazy"}
        height={height}
        width={width}
        srcSet={webp}
        type="image/webp"
      />
      <img
        alt={alt}
        loading={"lazy"}
        decoding={"async"}
        src={src}
        height={height}
        width={width}
        {...delegated}
      />
    </picture>
  );
}

export default Img;
