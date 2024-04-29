import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart } from '../features/cartSlice';
import '../styles/ProductList.css'; // Import the CSS file

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(addToCart(item)); // Dispatch action to increase quantity
  };

  // Calculate total price of all items in cart
  const totalPrice = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  return (
    <div className="product-list">
      <h2>ADD TO CART </h2>
      <div className="row">
        {cart.map(item => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="name">{item.name}</div>
            <div className="price">${item.price.toFixed(2)}</div>
            <div>Quantity: {item.quantity}</div>
            <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
            <button onClick={() => handleIncreaseQuantity(item)}>+</button> {/* Button to increase quantity */}
          </div>
        ))}
      </div>
      <div className="total-price">Total Price: ${totalPrice.toFixed(2)}</div>
    </div>
  );
};

export default Cart;
