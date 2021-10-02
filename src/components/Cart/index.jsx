const Cart = ({ currentSale }) => {
  return (
    <>
      <h3>Carrinho</h3>
      <ul>
        {currentSale.map((item, index) => (
          <div key={index}>
            <h2>Produto: {item.name}</h2>
            <p>Preço original: R${item.price.toFixed(2)}</p>
            <p>Desconto: {item.discount}%</p>
            <p>Valor do desconto: R${item.discountPrice.toFixed(2)}</p>
            <p>Preço com desconto: R${item.finalPrice.toFixed(2)}</p>
          </div>
        ))}
      </ul>
    </>
  );
};
export default Cart;
