/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

export default function ProductItem({ product }) {
  return (
    <div>
      <Link href={`/assets/${product.slug}`} passHref>
        <div>
          <img
            alt=""
            src={product.image}
            width="300px"
            height="300px"
            title={product.name}
          ></img>
          <div>
            <h1>{product.name}</h1>
            <input value={product.rating} readOnly></input>
          </div>
        </div>
      </Link>
    </div>
  );
}
