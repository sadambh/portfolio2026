import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navbar({ cartItemCount = 0, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <nav className="navbar">
      <span to="/ecommerce" className="logo-link">
        <h2 className="logo-E-Shop">E-Shop</h2>
      </span>

      <form onSubmit={handleSearchSubmit} className="search-form">
        <input 
          type="text"
          placeholder="Rechercher un produit..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <button type="submit" className="search-btn">🔍</button>
      </form>

      <div className="nav-links">
        {/* Accueil → E-Shop */}
        <Link to="/ecommerce" className="nav-link">Accueil</Link>
        
        {/* Portfolio */}
        <Link to="/portfolio" className="nav-link">Portfolio</Link>
        
        {/* E-Shop */}
        {/* <Link to="/ecommerce" className="btn-primary">E-Shop</Link> */}
        
        {/* Panier */}
        <Link to="/cart" className="cart-icon">
          <span role="img" aria-label="cart">🛒</span>
          {cartItemCount > 0 && (
            <span className="cart-count">{cartItemCount}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;