/* eslint-disable @next/next/no-img-element */
import Product from "../../models/Product";
import db from "../../utils/db";

export default function ProductScreen(props) {
  const { product } = props;

  return (
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
