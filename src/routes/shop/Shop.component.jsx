import './shop.style.scss'
import { useContext } from "react";
import ProductCard from "../../components/product-card/ProductCard.component";
import { ProductsContext } from "../../context/products.context";

const Shop = () => {
    let { products } = useContext(ProductsContext)
    
  return (
    <div className="products-container">
      {products.map((prod) => (
          <ProductCard key={prod.id} prod={prod}  />
      ))}
    </div>
  );
}

export default Shop;