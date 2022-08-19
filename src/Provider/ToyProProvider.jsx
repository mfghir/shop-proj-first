import React, { useContext, useReducer } from "react";
import _ from "lodash";
import { dataToys } from "../db/data";

const ToyProContext = React.createContext(); //state
const ToyProContextDisp = React.createContext(); //setState()

const reducer = (state, action) => {
  switch (action.type) {
    case "inc": {
      const index = state.findIndex((item) => item.id === action.id);
      // 3.
      const product = { ...state[index] };
      product.quantity++;
      // 4.
      const UpdatePro = [...state];
      UpdatePro[index] = product;
      return UpdatePro;
    }

    case "dec": {
      const index = state.findIndex((item) => item.id === action.id);
      // 3.
      const product = { ...state[index] };
      if (product.quantity === 1) {
        const filterPro = state.filter((p) => p.id !== action.id);
        return filterPro;
      } else {
        // 4.
        const UpdatePro = [...state];
        product.quantity--;
        UpdatePro[index] = product;
        return UpdatePro;
      }
    }

    case "delete":
      const filteredProducts = state.filter((p) => p.id !== action.id);
      return filteredProducts;

    case "sort": {
      const val = action.selectedOption.value;
      const toyPro = [...state];
      if (val === "lowest") {
        return _.orderBy(toyPro, ["price"], ["asc"]);
      } else {
        return _.orderBy(toyPro, ["price"], ["desc"]);
      }
    }

    case "search": {
      const val = action.event.target.value;
      if (val === "") {
        return state;
      } else {
        const filterPro = state.filter((p) =>
          p.name.toLowerCase().includes(val.toLowerCase())
        );
        return filterPro;
      }
      // return state;
    }

    default:
      return state;
  }
};

const ToyProProvider = ({ children }) => {
  const [toyPro, dispatch] = useReducer(reducer, dataToys);

  return (
    <ToyProContext.Provider value={toyPro}>
      <ToyProContextDisp.Provider value={dispatch}>
        {children}
      </ToyProContextDisp.Provider>
    </ToyProContext.Provider>
  );
};

export default ToyProProvider;

export const useToyPro = () => useContext(ToyProContext);

export const useToyProAct = () => useContext(ToyProContextDisp);
