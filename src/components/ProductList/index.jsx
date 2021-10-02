import { useState } from "react";
import Product from "../Product";

const ProductList = () => {
  const [click, setClick] = useState(false);

  const [selectedProd, setSelectedProd] = useState();

  const [desc, setDesc] = useState();

  const [useProduct, setProduct] = useState([
    { id: 1, name: "Smart TV LED 50", price: 1999.0 },
    { id: 2, name: "PlayStation 5", price: 12000.0 },
    { id: 3, name: "Notebook Acer Nitro 5", price: 5109.72 },
    { id: 4, name: "Headset s fio Logitech G935", price: 1359.0 },
    { id: 5, name: "Tablet Samsung Galaxy Tab S7", price: 4844.05 },
    { id: 6, name: "Cadeira Gamer Cruiser Preta FORTREK", price: 1215.16 },
  ]);

  const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const generate = () => {
    setSelectedProd(useProduct.filter((item) => item.id === random(1, 6)));
    discPerc();
    setClick(true);
  };

  const discPerc = () => {
    return setDesc(random(40, 90));
  };
  const discPrice = () => {
    return ((selectedProd[0].price * desc) / 100).toFixed(2);
  };

  return (
    <>
      <div>
        <button onClick={() => generate()}>GERAR DESCONTO</button>

        {click && selectedProd && (
          <Product
            selectedProd={selectedProd}
            random={random}
            desc={desc}
            discPrice={discPrice}
          />
        )}
      </div>
    </>
  );
};

export default ProductList;
