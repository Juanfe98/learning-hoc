
export const ProductItem = ({product}) => {
  return (
    <div className="product">
      <p>
        <b>Title:</b> {product.title}
      </p>
      <p>
        <b>Style:</b> {product.style}
      </p>
      <p>
        <b>Price:</b> {product.price}
      </p>
      <p>
        <b>Description:</b> {product.description}
      </p>
      <hr />
    </div>
  );
};
