/* eslint-disable @next/next/no-img-element */
import Layout from "../../components/Layout";
import Product from "../../models/Product";
import db from "../../utils/db";

export default function ProductScreen(props) {
  const { product } = props;

  return (
    <Layout title={product.name} description={product.description}>
      <div container spacing={1}>
        <div item md={6} xs={12}>
          <img
            src={product.image}
            alt={product.name}
            width="640px"
            height="640px"
          ></img>
        </div>
        <div item md={3} xs={12}>
          <ul>
            <li>
              <h2 component="h1" variant="h1">
                {product.name}
              </h2>
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
        <div item md={3} xs={12}>
          <div>
            <ul>
              <li>
                <div container>
                  <div item xs={6}>
                    <h2>Price</h2>
                  </div>
                  <div item xs={6}>
                    <h2>${product.price}</h2>
                  </div>
                </div>
              </li>
              <li>
                <div container>
                  <div item xs={6}>
                    <h2>Status</h2>
                  </div>
                  <div item xs={6}>
                    <h2>
                      {product.countInStock > 0 ? "In stock" : "Unavailable"}
                    </h2>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
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
