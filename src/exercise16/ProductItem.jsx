import { useContext } from 'react';
import CartContext from './CartContext';

function ProductItem({ id, name, price }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({
      id: id,
      name: name,
      price: price
    });
  };

  return (
    <div>
      <h2>{name}</h2>

      <p>
        Price: ${price}

        <button
          onClick={handleAddToCart}
          style={{ marginLeft: '20px' }}
        >
          Add to Cart
        </button>
      </p>
    </div>
  );
}

export default ProductItem;