import { useState } from "react";
import style from "./NavBar.module.css";
import { FaSearch } from "react-icons/fa";

import { useToyProAct } from "../Provider/ToyProProvider";

const SearchBar = () => {
  const dispatch = useToyProAct();
  const [searchVal, setSearchVal] = useState("");

  const changeHander = (e) => {
    dispatch({ type: "search", event: e });
    setSearchVal(e.target.value);
  };

  return (
    <section className={style.search}>
      <label htmlFor="search">
        <FaSearch />
      </label>

      <input
        placeholder="search...."
        type="text"
        id="search"
        onChange={changeHander}
        value={searchVal}
      />
    </section>
  );
};

export default SearchBar;
