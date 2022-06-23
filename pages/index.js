/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout";
import db from "../utils/db";
import Product from "../models/Product";
import ProductItem from "../components/ProductItem";

export default function Home(props) {
  const { topRatedProducts } = props;

  return (
    <Layout>
      <div>
        {topRatedProducts.map((product) => (
          <Link href={`product/${product.slug}`} key={product.name}>
            <a>
              <div>
                <ProductItem product={product} />
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const featuredProductsDocs = await Product.find(
    { isFeatured: true },
    "-reviews"
  )
    .lean()
    .limit(3);
  const topRatedProductsDocs = await Product.find({}, "-reviews")
    .lean()
    .sort({
      rating: -1,
    })
    .skip(0)
    .limit(96);
  await db.disconnect();
  return {
    props: {
      featuredProducts: featuredProductsDocs.map(db.convertDocToObj),
      topRatedProducts: topRatedProductsDocs.map(db.convertDocToObj),
    },
  };
}
