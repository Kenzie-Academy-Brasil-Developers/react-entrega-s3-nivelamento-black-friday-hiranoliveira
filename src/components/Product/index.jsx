import Card from "../Card";

const Product = ({ handleClick, selectedProd }) => {
  return (
    <>
      <div>
        {selectedProd?.map((produto, index) => (
          <div key={index}>
            <Card produto={produto} />

            <button onClick={handleClick}>Adicionar ao carrinho</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
