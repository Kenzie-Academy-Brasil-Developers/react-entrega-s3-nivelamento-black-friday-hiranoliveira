import { useState } from "react";
import Cart from "../Cart";
import Product from "../Product";

const ProductList = () => {
  const [useProduct, setProduct] = useState([
    { id: 1, name: "Smart TV LED 50", price: 1999.0 },
    { id: 2, name: "PlayStation 5", price: 12000.0 },
    { id: 3, name: "Notebook Acer Nitro 5", price: 5109.72 },
    { id: 4, name: "Headset s fio Logitech G935", price: 1359.0 },
    { id: 5, name: "Tablet Samsung Galaxy Tab S7", price: 4844.05 },
    { id: 6, name: "Cadeira Gamer Cruiser Preta FORTREK", price: 1215.16 },
  ]);
  const [click, setClick] = useState(false);

  const [selectedProd, setSelectedProd] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);

  const handleClick = () => {
    setCurrentSale([...currentSale, selectedProd[0]]);
  };

  const findProd = () => {
    const id = Math.floor(Math.random() * 6) + 1;
    const disc = Math.floor(Math.random() * 51) + 40;

    const filtProd = useProduct.filter((item) => {
      return item.id === id;
    });

    const discPrice = filtProd[0].price * (disc / 100);

    const finalPrice = filtProd[0].price - discPrice;

    setSelectedProd([
      {
        id: filtProd[0].id,
        name: filtProd[0].name,
        price: filtProd[0].price,
        discount: disc,
        discountPrice: discPrice,
        finalPrice: finalPrice,
      },
    ]);

    setClick(true);
  };

  const totalCart = currentSale.reduce((total, price) => {
    return Number(total) + Number(price.finalPrice);
  }, 0);

  return (
    <>
      <div>
        <button onClick={findProd}>GERAR DESCONTO</button>

        {click && selectedProd && (
          <Product handleClick={handleClick} selectedProd={selectedProd} />
        )}
        <Cart currentSale={currentSale} />
        <h2>Total do Carrinho:</h2>
        <p>{totalCart.toFixed(2)}</p>
      </div>
    </>
  );
};

export default ProductList;
