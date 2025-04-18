import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContextProvider/ShopContextProvider";
import { CiCircleRemove } from "react-icons/ci";
import "./CartItems.css";

const CartItems = () => {
  const {
    allproduct,
    cartItems,
    addToCart,
    removeFromCart,
    deleteItemFromCart,
  } = useContext(ShopContext);

  const getTotalAmount = () => {
    let total = 0;
    allproduct.forEach((e) => {
      if (cartItems[e.id]) {
        for (let size in cartItems[e.id]) {
          total += e.price * cartItems[e.id][size];
        }
      }
    });
    return total;
  };

  const productTotal = getTotalAmount();
  const shippingFee = productTotal > 300 ? 0 : 50;
  const finalAmount = productTotal + shippingFee;

  return (
    <div className="cart-container">
      <div className="cart-header">
        <p>Product</p>
        <p>Title</p>
        <p>Size</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {allproduct.map((e) => {
        if (cartItems[e.id]) {
          return Object.entries(cartItems[e.id]).map(([size, quantity]) => {
            if (quantity > 0) {
              return (
                <div className="cart-item" key={e.id + size}>
                  <img src={e.image} alt={e.title} />
                  <p>{e.title}</p>
                  <p>{size}</p>
                  <p>${e.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => removeFromCart(e.id, size)}>
                      -
                    </button>
                    <span>{quantity}</span>
                    <button onClick={() => addToCart(e.id, size)}>+</button>
                  </div>
                  <p>${(e.price * quantity).toFixed(2)}</p>
                  <CiCircleRemove
                    size={26}
                    className="remove-icon"
                    onClick={() => deleteItemFromCart(e.id, size)}
                  />
                </div>
              );
            }
            return null;
          });
        }
        return null;
      })}

      <div className="cart-summary">
        <h3>Subtotal: ${productTotal.toFixed(2)}</h3>
        <p>
          Shipping Fee:{" "}
          {shippingFee === 0 ? (
            <span style={{ color: "green", fontWeight: "bold" }}>Free</span>
          ) : (
            `$${shippingFee}`
          )}
        </p>
        <h2>Total: ${finalAmount.toFixed(2)}</h2>

        <button className="checkout-button">
          Proceed to Checkout (${finalAmount.toFixed(2)})
        </button>
      </div>
    </div>
  );
};

export default CartItems;
