import ProductCard from '../Components/ProductCard';

function Home({ products = [], addToCart }) {
  if (products.length === 0) {
    return (
      <div className="home-empty">
        <h1>Produits</h1>
        <p>Aucun produit trouvé</p>
      </div>
    );
  }

  return (
    <div className="home-container">
      <h1>Nos Produits</h1>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;