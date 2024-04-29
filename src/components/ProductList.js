import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/ProductList.css'; // Import the CSS file

const ProductList = () => {
  const products = useSelector(state => state.products);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // Function to get the quantity of a specific product in the cart
  const getQuantityInCart = (productId) => {
    const cartItem = cart.find(item => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div className="product-list">
      <h2>GROSSARY PRODUCTS</h2>
      {products.map((product, index) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <div className="name">{product.name}</div>
          <div className="price">${product.price.toFixed(2)}</div>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          <div className="quantity-in-cart">Quantity in Cart: {getQuantityInCart(product.id)}</div>
        </div>
      ))}
     
      
    </div>
  );
};

export default ProductList;
