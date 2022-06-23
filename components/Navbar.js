import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect } from "react";

const Navbar = () => {
  const router = useRouter();

  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`/api/products/categories`);
      setCategories(data);
    } catch (err) {
      <h1>error</h1>;
    }
  };

  const [query, setQuery] = useState("");
  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <navbar className="navbar">
      <div display="flex" alignItems="center">
        <Link href="/">
          <a>
            <span>HOME</span>
          </a>
        </Link>
      </div>

      {categories.map((category) => (
        <Link key={category} href={`/search?category=${category}`}>
          <a>
            <li>
              <span primary={category}>{category}</span>
            </li>
          </a>
        </Link>
      ))}

      <div>
        <form onSubmit={submitHandler}>
          <input
            name="query"
            placeholder="Search products"
            onChange={queryChangeHandler}
          />
          <button type="submit" aria-label="search">
            search
          </button>
        </form>
      </div>
    </navbar>
  );
};

export default Navbar;
