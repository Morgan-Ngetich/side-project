import React from 'react';


function Cart({ cart, onRemoveFromCart,onBuyItem  }) {

  const handleBuyClick = (itemId) => {
    // Call the onBuyItem function with the item ID to reduce the stock by one
    onBuyItem(itemId);
  };
 
  return (
    <>
      <h2>Shopping Cart</h2>
      <div className="card-container">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
        cart.map((item) => (
          <div key={item.id} className="card">
            <div className="card-details">
              <img src={item.image} alt={item.name} className="card-image" />  
              <p> {item.name}</p>
          <p><span>Brand:</span> {item.brand}</p>
          <p><span>Price:</span> {item.price}</p>
          <p><span>Size:</span> {item.size}</p>
          <p><span>Stock:</span> {item.stock}</p>            
            </div>
            <button style={{backgroundColor:"green"}}
             onClick={() => handleBuyClick(item.id)}
             
            >BUY</button>
            <button className="remove-from-cart" onClick={() => onRemoveFromCart (item.id)} style={{backgroundColor:"red"}}>
              Remove from Cart
            </button>
          </div>
        )))}
      </div>
    </>
  );
}

export default Cart;
