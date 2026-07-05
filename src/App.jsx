import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Cart from "./Components/Cart";
import Portfolio from "./Portfolio";
import Footer from "./Components/Footer";
import { products }from "./data/products";  

function App() {
  // Console.log pour vérifier que App fonctionne
  console.log("App est en cours d'exécution");     
  
  // État pour les produits du panier
  const [cartItems, setCartItems] = useState([]);
  
  // État pour la recherche
  const [searchTerm, setSearchTerm] = useState("");

  // Fonctions pour gérer le panier
  const addToCart = (product) => {
    console.log("Produit ajouté:", product.title);
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    console.log("Produit supprimé, ID:", productId);
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    console.log("Panier vidé");
    setCartItems([]);
  };

  // Filtrer les produits selon la recherche
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log("Nombre de produits:", filteredProducts.length);
  console.log("Articles dans le panier:", cartItems.length);

  return (
    <div className="app">
      {/* Routes sans Navbar globale pour éviter les conflits */}
      <Routes>
        {/* Page d'accueil = Portfolio (sans la Navbar globale) */}
        <Route path="/" element={<Portfolio />} />
        
        {/* E-commerce avec Navbar */}
        <Route path="/ecommerce" element={
          <>
            <Navbar 
              cartItemCount={cartItems.length} 
              onSearch={setSearchTerm}
            />
            <div className="main-content">
              <Home products={filteredProducts} addToCart={addToCart} />
            </div>
            <Footer />
          </>
        } />
        
        <Route path="/products" element={
          <>
            <Navbar 
              cartItemCount={cartItems.length} 
              onSearch={setSearchTerm}
            />
            <div className="main-content">
              <Home products={filteredProducts} addToCart={addToCart} />
            </div>
            <Footer />
          </>
        } />
        
        <Route path="/cart" element={
          <>
            <Navbar 
              cartItemCount={cartItems.length} 
              onSearch={setSearchTerm}
            />
            <div className="main-content">
              <Cart cartItems={cartItems} removeFromCart={removeFromCart} onCheckout={clearCart} />
            </div>
            <Footer />
          </>
        } />
        
        {/* Portfolio (accès direct) */}
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;