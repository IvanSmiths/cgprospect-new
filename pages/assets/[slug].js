/* eslint-disable @next/next/no-img-element */
import Product from "../../models/Product";
import db from "../../utils/db";
import Head from "next/head";
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
            <ul className="single-asset-info">
              <li>
                <h1>
                  {product.name} {product.category}
                </h1>
              </li>
              <li>
                Asset:{" "}
                {product.category === "3D Model" ? (
                  <Link href="http://localhost:3000/search?query=&category=3D+Model">
                    <a>{product.category}</a>
                  </Link>
                ) : (
                  <Link href="http://localhost:3000/search?query=&category=Texture">
                    <a>{product.category}</a>
                  </Link>
                )}
              </li>
              <li>
                Category:{" "}
                <Link
                  href={`http://localhost:3000/search?query=&category=${product.brand}`}
                >
                  <a>{product.brand}</a>
                </Link>
              </li>
              <li>
                Scale: <span>{product.scale}</span>
              </li>
              <li>
                Location: <span>{product.location}</span>
              </li>

              <li>
                <p> Description: {product.description}</p>
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
          <ul className="download-list">
            <li className="medium-font first-list">Downloads:</li>
            {product.lowPoly ? <li>Lowpoly</li> : null}
            {product.lowPoly ? (
              <li>
                <a href={product.lowPoly}>Lowpoly</a>
              </li>
            ) : null}
            {product.midPoly ? <li>Midpoly</li> : null}
            {product.midPoly ? (
              <li>
                <a href={product.midPoly}>Midpoly</a>
              </li>
            ) : null}
            {product.highPoly ? <li>Highpoly</li> : null}
            {product.highPoly ? (
              <li>
                <a href={product.highPoly}>Highpoly</a>
              </li>
            ) : null}
          </ul>
          <ul className="download-list">
            {product.jpg2k ? <li>JPG</li> : null}
            {product.jpg2k ? (
              <li>
                <a href={product.jpg2k}>2K</a>
              </li>
            ) : null}
            {product.jpg4k ? (
              <li>
                <a href={product.jpg4k}>4K</a>
              </li>
            ) : null}
            {product.jpg8k ? (
              <li>
                <a href={product.jpg8k}>8K</a>
              </li>
            ) : null}
          </ul>
          <ul className="download-list">
            {product.png2k ? <li>PNG</li> : null}
            {product.png2k ? (
              <li>
                <a href={product.png2k}>2K</a>
              </li>
            ) : null}
            {product.png4k ? (
              <li>
                <a href={product.png4k}>4K</a>
              </li>
            ) : null}
            {product.png8k ? (
              <li>
                <a href={product.png8k}>8K</a>
              </li>
            ) : null}
          </ul>
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
