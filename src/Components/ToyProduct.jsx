import style from "./ToyProduct.module.css";
import { FaPlus, FaMinus, FaTrash, FaTimes } from "react-icons/fa";

const ToyProduct = ({ pro, onInc, onDic, onDelete }) => {
  return (
    <section className={style.ToyProduct}>
      <span className={style.close} onClick={onDelete}>
        <FaTimes />
      </span>

      <figure>
        <img src={pro.pic} alt="pro" />
      </figure>

      <p> {pro.name} </p>
      <p> {pro.price} $</p>

      <div>
        <button className={`${style.btn} ${style.add}`} onClick={onInc}>
          <FaPlus />
        </button>

        <span>{pro.quantity}</span>

        <button
          className={`${style.btn} ${pro.quantity === 1 && style.remove}`}
          onClick={onDic}
        >
          {pro.quantity > 1 ? <FaMinus /> : <FaTrash />}
        </button>
      </div>
    </section>
  );
};

export default ToyProduct;
