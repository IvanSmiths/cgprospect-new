import { useState } from "react";
import { useRouter } from "next/router";

function Search() {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };
  return (
    <form onSubmit={submitHandler}>
      <label className="label-header-home" htmlFor="seacrh-assets">
        Search assets
      </label>
      <input
        id="seacrh-assets"
        name="query"
        placeholder="Search products"
        onChange={queryChangeHandler}
      />
      <button type="submit" aria-label="search">
        search
      </button>
    </form>
  );
}

export default Search;
