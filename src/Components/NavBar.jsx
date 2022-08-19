import style from "./NavBar.module.css";
import logo2 from "../pic/logo2.jpg";
import SearchBar from "./SearchBar";

import { useToyPro } from "../Provider/ToyProProvider";
import { FaShoppingBag, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import SelectBar from "./SelectBar";

const NavBar = () => {
  const toyPro = useToyPro();
  const allItems = toyPro.filter((p) => p.quantity > 0).length;

  return (
    <section className={style.nav}>
      <header>
        <figure>
          <img src={logo2} alt="logo" />
        </figure>

        <h1><a href="https://mfgh.netlify.app/">mfgh.netlify.app</a></h1>

        <div>
          <FaSignInAlt />
          <FaUserAlt />
        </div>
      </header>

      <nav>
        <SelectBar />

        <SearchBar />

        <div className={style.shop}>
          <FaShoppingBag />
          <span>{allItems}</span>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
