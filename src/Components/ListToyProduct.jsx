import NavBar from "./NavBar";
import ToyProduct from "./ToyProduct";
import { useToyPro, useToyProAct } from "../Provider/ToyProProvider";

const ListToyProduct = () => {
  const toyPro = useToyPro();
  const dispatch = useToyProAct();

  return (
    <>
      <NavBar />
      {!toyPro.length && <h3>there is no prodcut...</h3>}

      <section className="toyProduct">
        {toyPro.map((pro) => {
          return (
            <ToyProduct
              key={pro.id}
              pro={pro}
              onInc={() => dispatch({ type: "inc", id: pro.id })}
              onDic={() => dispatch({ type: "dec", id: pro.id })}
              onDelete={() => dispatch({ type: "delete", id: pro.id })}
            />
          );
        })}
      </section>
    </>
  );
};

export default ListToyProduct;
