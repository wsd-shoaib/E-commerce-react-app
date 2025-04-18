// ✅ ShopContextProvider.js
import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

// ডিফল্ট কার্ট বানানো
const getDefaultCart = (products) => {
  let cart = {};
  products.forEach((product) => {
    cart[product.id] = {}; // size ভিত্তিক quantity রাখবো
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [allproduct, setAllproduct] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    fetch("/AllProducts.json")
      .then((res) => res.json())
      .then((data) => {
        setAllproduct(data);
        const savedCart = localStorage.getItem("cartItems");
        if (savedCart) {
          setCartItems(JSON.parse(savedCart));
        } else {
          setCartItems(getDefaultCart(data));
        }
      });
  }, []);

  useEffect(() => {
    if (Object.keys(cartItems).length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (productId, size) => {
    setCartItems((prevCart) => {
      const updatedCart = { ...prevCart };
      if (!updatedCart[productId]) {
        updatedCart[productId] = {};
      }
      if (!updatedCart[productId][size]) {
        updatedCart[productId][size] = 1;
      } else {
        updatedCart[productId][size] += 1;
      }
      return updatedCart;
    });
  };

  const removeFromCart = (productId, size) => {
    setCartItems((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId]?.[size] > 0) {
        updatedCart[productId][size] -= 1;
        if (updatedCart[productId][size] === 0) {
          delete updatedCart[productId][size];
        }
      }
      return updatedCart;
    });
  };

  const deleteItemFromCart = (productId, size) => {
    setCartItems((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId]?.[size]) {
        delete updatedCart[productId][size];
      }
      return updatedCart;
    });
  };

  const contextValue = {
    allproduct,
    cartItems,
    addToCart,
    removeFromCart,
    deleteItemFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
