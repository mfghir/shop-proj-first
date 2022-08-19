import style from "./NavBar.module.css";
import Select from "react-select";
import { useToyProAct } from "../Provider/ToyProProvider";

import { useState } from "react";

const sortOptions = [
  { value: "lowest", label: "Lowest" },
  { value: "highest", label: "Highest" },
];

const SelectBar = () => {
  const dispatch = useToyProAct();
  const [sort, setSort] = useState("");

  const sortHandler = (selectedOption) => {
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
    console.log(selectedOption);
  };

  return (
    <Select
      className={style.select}
      options={sortOptions}
      value={sort}
      onChange={sortHandler}
    />
  );
};

export default SelectBar;
