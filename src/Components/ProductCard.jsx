function ProductCard({ product, addToCart }) {
  const discountedPrice = product.discountPercentage 
    ? product.price * (1 - product.discountPercentage / 100)
    : product.price;

  const productImage = product.thumbnail || (product.images && product.images[0]);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      discountedPrice: discountedPrice,
      thumbnail: productImage,
      quantity: 1
    });
  };

  return (
    <div className="product-card">
      <img 
        src={productImage} 
        alt={product.title}
        className="product-image"
      />
      
      <h3 className="product-title">{product.title}</h3>  
      
      <div className="product-price">
        {product.discountPercentage > 0 ? (
          <>
            <span className="original-price">{product.price}€</span>
            <span className="discounted-price">{discountedPrice.toFixed(2)}€</span>
            <span className="discount-badge">-{product.discountPercentage}%</span>
          </>
        ) : (
          <span className="price">{product.price}€</span>
        )}
      </div>
      
      <div className="product-stock">
        {product.stock > 0 ? (
          <span className="in-stock">✅ En stock ({product.stock})</span>
        ) : (
          <span className="out-of-stock">❌ Rupture de stock</span>
        )}
      </div>
      
      <button 
        onClick={handleAddToCart}
        disabled={product.stock === 0}
        className="add-to-cart-btn"
      >
        {product.stock > 0 ? 'Ajouter au panier' : 'Rupture de stock'}
      </button>
    </div>
  );
}


export default ProductCard;