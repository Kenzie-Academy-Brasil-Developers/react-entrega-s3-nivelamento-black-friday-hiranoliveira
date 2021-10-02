const Card = ({ produto }) => {
  return (
    <>
      <p>Produto: {produto.name}</p>
      <p>Preço original: R${produto.price.toFixed(2)}</p>
      <p>Desconto surpresa: {produto.discount}%</p>
      <p>Valor do desconto: R${produto.discountPrice.toFixed(2)}</p>
      <p>Preço final: R${produto.finalPrice.toFixed(2)}</p>
    </>
  );
};

export default Card;
