const Product = ({ selectedProd, desc, discPrice }) => {
  //   const discPerc = () => {
  //     return random(40, 90);
  //   };
  //   const discPrice = () => {
  //     return (selectedProd[0].price * discPerc()) / 100;
  //   };
  return (
    <>
      <div>
        <h2>Produto: {selectedProd[0].name}</h2>
        <p>Preço normal: R${selectedProd[0].price}</p>
        <p>Desconto: {desc}%</p>
        <p>Preço com desconto: R${discPrice()}</p>
      </div>
    </>
  );
};

export default Product;
