/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import db from "../utils/db";
import Link from "next/link";
import SearchBar from "../components/Search";
import Product from "../models/Product";
import { Pagination } from "@material-ui/lab";

const PAGE_SIZE = 1;

export default function Search(props) {
  const router = useRouter();
  const {
    query = "all",
    category = "all",
    method = "all",
    brand = "all",
    sort = "featured",
  } = router.query;
  const { products, countProducts, categories, methods, brands, pages } = props;

  const filterSearch = ({
    page,
    category,
    method,
    brand,
    sort,
    min,
    max,
    searchQuery,
    price,
    rating,
  }) => {
    const path = router.pathname;
    const { query } = router;
    if (page) query.page = page;
    if (searchQuery) query.searchQuery = searchQuery;
    if (sort) query.sort = sort;
    if (category) query.category = category;
    if (method) query.method = method;
    if (brand) query.brand = brand;
    if (price) query.price = price;
    if (rating) query.rating = rating;
    if (min) query.min ? query.min : query.min === 0 ? 0 : min;
    if (max) query.max ? query.max : query.max === 0 ? 0 : max;

    router.push({
      pathname: path,
      query: query,
    });
  };
  const categoryHandler = (e) => {
    filterSearch({ category: e.target.value });
  };

  const methodHandler = (e) => {
    filterSearch({ method: e.target.value });
  };
  const pageHandler = (e, page) => {
    filterSearch({ page });
  };
  const brandHandler = (e) => {
    filterSearch({ brand: e.target.value });
  };
  const sortHandler = (e) => {
    filterSearch({ sort: e.target.value });
  };

  console.log(pages);

  return (
    <div className="assets-cnt">
      <section className="assets-filters-cnt">
        <ul className="assets-filters">
          <li>
            Asset
            <select
              className="assets-select"
              value={category}
              onChange={categoryHandler}
            >
              <option value="all">All</option>
              {categories &&
                categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
            </select>
          </li>
          <li>
            Method
            <select
              className="assets-select"
              value={method}
              onChange={methodHandler}
            >
              <option value="all">All</option>
              {methods &&
                methods.map((method) => (
                  <option key={method} value={method}>
                    {method}
                  </option>
                ))}
            </select>
          </li>
          <li>
            Category
            <select
              className="assets-select"
              value={brand}
              onChange={brandHandler}
            >
              <option value="all">All</option>
              {brands &&
                brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
            </select>
          </li>

          <li>
            Sort by
            <select
              className="assets-select"
              value={sort}
              onChange={sortHandler}
            >
              <option value="oldest">New</option>
              <option value="newest">Old</option>
            </select>
          </li>
          <li className="assets-filter-search-cnt">
            <SearchBar id="searchbar-page" />
          </li>
          <li
            className="assets-reset-filters btn"
            onClick={() => router.push("/search")}
          >
            Reset Search
          </li>
        </ul>
      </section>
      <main className="assets-list-cnt">
        <span>
          {products.length === 0 ? "No" : countProducts}{" "}
          {products.length === 0 ? "results" : "Results"}{" "}
          {query !== "all" && query !== "" && "for"}{" "}
        </span>
        <span>{query !== "all" && query !== "" && query}</span>{" "}
        <ul className="assets-list">
          {products.map((product) => (
            <li key={product.slug}>
              <Link href={`/assets/${product.slug}`}>
                <a>
                  <img
                    height="350px"
                    width="350px"
                    src={product.image}
                    alt={product.name}
                  />
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <Pagination
          defaultPage={parseInt(query.page || "1")}
          count={pages}
          onChange={pageHandler}
        ></Pagination>
      </main>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  await db.connect();
  const pageSize = query.pageSize || PAGE_SIZE;
  const page = query.page || 1;
  const category = query.category || "";
  const method = query.method || "";
  const brand = query.brand || "";
  const sort = query.sort || "";
  const searchQuery = query.query || "";

  const queryFilter =
    searchQuery && searchQuery !== "all"
      ? {
          name: {
            $regex: searchQuery,
            $options: "i",
          },
        }
      : {};
  const categoryFilter = category && category !== "all" ? { category } : {};
  const methodFilter = method && method !== "all" ? { method } : {};
  const brandFilter = brand && brand !== "all" ? { brand } : {};

  const order =
    sort === "newest"
      ? { createdAt: -1 }
      : sort === "oldestest"
      ? { createdAt: 1 }
      : { _id: -1 };

  const categories = await Product.find().distinct("category");
  const methods = await Product.find().distinct("method");
  const brands = await Product.find().distinct("brand");
  const productDocs = await Product.find({
    ...queryFilter,
    ...categoryFilter,
    ...methodFilter,
    ...brandFilter,
  })
    .sort(order)
    .skip(pageSize * (page - 1))
    .limit(pageSize)
    .lean();

  const countProducts = await Product.countDocuments({
    ...queryFilter,
    ...categoryFilter,
    ...methodFilter,
    ...brandFilter,
  });
  await db.disconnect();

  const products = productDocs.map(db.convertDocToObj);

  return {
    props: {
      products,
      countProducts,
      page,
      pages: Math.ceil(countProducts / pageSize),
      categories,
      methods,
      brands,
    },
  };
}
