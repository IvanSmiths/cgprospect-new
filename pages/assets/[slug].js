/* eslint-disable @next/next/no-img-element */
import Product from "../../models/Product";
import db from "../../utils/db";
import Head from "next/head";

export default function ProductScreen({ product }) {
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
        <title>CGProspect | download {product.name} for free</title>
        <meta
          name="description"
          content={`${product.name} is a free to download asset of CGProspect.`}
        />

        <meta
          property="og:url"
          content={`https://www.cgprospect.com/assets/${product.slug}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`CGProspect | ${product.name}, free to download asset`}
        />
        <meta
          property="og:description"
          content={`${product.name} is a free to download asset of CGProspect`}
        />
        <meta property="og:image" content={`${product.image}`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="cgprospect.com" />
        <meta
          property="twitter:url"
          content={`https://www.cgprospect.com/assets/${product.slug}`}
        />
        <meta
          name="twitter:title"
          content={`CGProspect | ${product.name}, free to download asset`}
        />
        <meta
          name="twitter:description"
          content={`${product.name} is a free to download asset of CGProspect`}
        />
        <meta name="twitter:image" content={`${product.image}`} />

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
            {product.brand ? <li>{product.brand}</li> : null}
            <li></li>
            {product.png2k ? <li>{product.png2k}</li> : null}
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
