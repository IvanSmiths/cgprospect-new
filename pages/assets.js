import Link from "next/link";
import db from "../utils/db";
import Product from "../models/Product";
import ProductItem from "../components/ProductItem";

function Assets(props) {
  const { topRatedProducts } = props;
  return (
    <div>
      {topRatedProducts.map((product) => (
        <Link href={`/product/${product.slug}`} key={product.name}>
          <a>
            <div>
              <ProductItem product={product} />
            </div>
          </a>
        </Link>
      ))}
    </div>
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
export default Assets;
