import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <h1>Your cart is empty</h1>;

  return (
    <section>
      <div className="cart-container">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Item Details</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Edit item</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img src={item.imgUrl} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td className="item-price">${item.price}</td>
                  <td className="item-quantity">{item.quantity}</td>
                  <td>
                    <div className="edit-buttons">
                      <button
                        className="quantity-btn-minus"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="quantity-btn-plus"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="remove-btn"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove Item
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="cart-details">
        <h5>Cart Unique Items: {totalUniqueItems}</h5>
        <h5>Total Items: {totalItems}</h5>
        <h2 className="item-total">Total Price: ${cartTotal}</h2>
      </div>
      <div className="cart-buttons">
        <button className="clear-btn" onClick={() => emptyCart()}>
          Clear Cart
        </button>
        <button className="buy-btn">Buy Now</button>
      </div>
    </section>
  );
};
export default Cart;
