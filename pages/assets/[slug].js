/* eslint-disable @next/next/no-img-element */
import Product from "../../models/Product";
import db from "../../utils/db";
import Head from "next/head";

export default function ProductScreen(props) {
  const { product } = props;
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.cgprospect.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Assets",
        item: "https://www.cgprospect.com/assets",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${product.name}`,
        item: `https://www.cgprospect.com/assets/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <div>
        <div>
          <img
            src={product.image}
            alt={product.name}
            width="640px"
            height="640px"
          ></img>
        </div>
        <div>
          <ul>
            <li>
              <h2>{product.name}</h2>
            </li>
            <li>
              <h2>Category: {product.category}</h2>
            </li>
            <li>
              <h2>Brand: {product.brand}</h2>
            </li>
            <li>
              <input value={product.rating} readOnly></input>
            </li>
            <li>
              <h2> Description: {product.description}</h2>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <ul>
              <li>
                <div>
                  <div>
                    <h2>Price</h2>
                  </div>
                  <div>
                    <h2>${product.price}</h2>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div>
                    <h2>Status</h2>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }, "-reviews").lean();
  await db.disconnect();
  return {
    props: {
      product: db.convertDocToObj(product),
    },
  };
}
