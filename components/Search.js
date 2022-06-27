/* eslint-disable @next/next/no-img-element */
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
    <form className="searchbar-cnt" onSubmit={submitHandler}>
      <label className="label-header-home" htmlFor="seacrh-assets">
        Search assets
      </label>
      <input
        className="searchbar"
        id="seacrh-assets"
        name="query"
        placeholder="Search 3d assets"
        onChange={queryChangeHandler}
      />
      <button className="btn-searchbar" type="submit" aria-label="search">
        <img
          width="23px"
          height="23px"
          src="/images/icon-search.svg"
          alt="icon search"
        />
      </button>
    </form>
  );
}

export default Search;
