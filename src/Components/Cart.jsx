import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cartItems = [], removeFromCart, onCheckout }) {
  
  const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
  
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.discountedPrice || item.price;
      return total + (price * (item.quantity || 1));
    }, 0);
  };

  const handleRemoveItem = (itemId) => {
    if (removeFromCart) {
      removeFromCart(itemId);
    }
  };

  const handleCheckout = () => {
    if (onCheckout) {
      onCheckout();
    }
    alert("✅ Votre commande a été validée !");
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <div className="cart-empty">
          <div className="empty-cart-icon">🛒</div>
          <h3>Votre panier est vide</h3>
          <p>Ajoutez des produits pour commencer vos achats</p>
          <Link to="/products" className="continue-shopping-btn">
            Voir les produits
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Mon panier ({totalItems} article{totalItems > 1 ? 's' : ''})</h2>
      
      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map((item) => {
            const itemPrice = item.discountedPrice || item.price;
            const itemTotal = itemPrice * (item.quantity || 1);
            
            return (
              <div key={item.id} className="cart-item">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="cart-item-image"
                />
                
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p className="cart-item-price">{itemPrice.toFixed(2)}€</p>
                </div>
                
                <div className="cart-item-quantity">
                  <span className="quantity-value">x{item.quantity || 1}</span>
                </div>
                
                <div className="cart-item-total">
                  {itemTotal.toFixed(2)}€
                </div>
                
                <button 
                  onClick={() => handleRemoveItem(item.id)}
                  className="remove-item-btn"
                >
                  🗑️
                </button>
              </div>
            );
          })}
        </div>
        
        <div className="cart-summary">
          <div className="summary-row">
            <span>Sous-total ({totalItems} articles)</span>
            <span>{calculateTotal().toFixed(2)}€</span>
          </div>
          
          <div className="summary-row">
            <span>Livraison</span>
            <span>Gratuite</span>
          </div>
          
          <div className="summary-row total">
            <span>Total</span>
            <span>{calculateTotal().toFixed(2)}€</span>
          </div>
          
          <button onClick={handleCheckout} className="checkout-btn">
            Valider la commande
          </button>
          
          <Link to="/products" className="continue-shopping-link">
            Continuer mes achats
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;