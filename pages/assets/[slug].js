/* eslint-disable @next/next/no-img-element */
import Product from "../../models/Product";
import db from "../../utils/db";
import Head from "next/head";
import constants from "../../utils/constants";
import Link from "next/link";

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
        <title>CG Prospect | Download {product.name} for free</title>
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
      <div className="single-asset-cnt">
        <section className="single-asset-img-cnt">
          <img
            src={product.image}
            alt={product.name}
            width="640px"
            height="640px"
          />
          <img
            src={product.imageSec}
            alt={product.name}
            width="640px"
            height="640px"
          />
        </section>
        <main className="single-asset-info-cnt">
          <div>
            <h1>
              Free to download: <br /> {product.name} {product.category}
            </h1>
            <ul className="single-asset-info">
              <li>
                <img
                  src="/images/icon-asset.svg"
                  width={constants.IconWidth}
                  height={constants.IconWidth}
                  alt="category"
                />
                Asset:
                {product.category === "3D Model" ? (
                  <Link href="/search?query=&category=3D+Model">
                    <a>{product.category}</a>
                  </Link>
                ) : (
                  <Link href="/search?query=&category=Texture">
                    <a>{product.category}</a>
                  </Link>
                )}
              </li>
              <li>
                <img
                  src="/images/icon-category.svg"
                  width={constants.IconWidth}
                  height={constants.IconWidth}
                  alt="category"
                />
                Category:
                <Link href={`/search?query=&brand=${product.brand}`}>
                  <a>{product.brand}</a>
                </Link>
              </li>
              <li>
                <img
                  src="/images/icon-scale.svg"
                  width={constants.IconWidth}
                  height={constants.IconWidth}
                  alt="category"
                />
                Scale: <span>{product.scale} meters</span>
              </li>
              <li>
                <img
                  src="/images/icon-method.svg"
                  width={constants.IconWidth}
                  height={constants.IconWidth}
                  alt="category"
                />
                Method: <span>{product.method}</span>
              </li>
              <li>
                <img
                  src="/images/icon-location.svg"
                  width={constants.IconWidth}
                  height={constants.IconWidth}
                  alt="category"
                />
                Location: <span>{product.location}</span>
              </li>
              <li>
                <img
                  src="/images/icon-date.svg"
                  width={constants.IconWidth}
                  height={constants.IconWidth}
                  alt="category"
                />
                Published: <span>17/09/2021</span>
              </li>
            </ul>
            <div className="sponsor-cnt">
              <span>Sponsored by:</span>
              <span className="sponsor-name">No one yet</span>
              <img src="/images/banner.svg" alt="" />
            </div>
          </div>
        </main>
      </div>
      <section className="more-details-cnt">
        <div className="donation-cnt"></div>
        <div className="download-cnt">
          <span className="medium-font">Downloads:</span>
          {product.lowPoly ? (
            <ul className="download-list">
              <li>
                <a href={product.lowPoly}>Lowpoly</a>
              </li>
              <li>
                <a href={product.midPoly}>Midpoly</a>
              </li>
              <li>
                <a href={product.highPoly}>Highpoly</a>
              </li>
            </ul>
          ) : null}
          {product.jpg2k ? (
            <ul className="download-list">
              <li>JPG</li>
              <li>
                <a href={product.jpg2k}>2K</a>
              </li>
              <li>
                <a href={product.jpg4k}>4K</a>
              </li>
              <li>
                <a href={product.jpg8k}>8K</a>
              </li>
            </ul>
          ) : null}
          {product.jpg2k ? (
            <ul className="download-list">
              <li>PNG</li>
              <li>
                <a href={product.png2k}>2K</a>
              </li>
              <li>
                <a href={product.png4k}>4K</a>
              </li>
              <li>
                <a href={product.png8k}>8K</a>
              </li>
            </ul>
          ) : null}
          <p>Description: {product.description}</p>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: db.convertDocToObj(product),
    },
  };
}
