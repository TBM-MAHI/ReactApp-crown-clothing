import { useNavigate } from "react-router-dom";
import './catagoryItemsPreview.style.scss';
import ProductCard from "../product-card/ProductCard.component";

const CatagoryItemsPreview = ({ items, catagory }) => {
    let navigate = useNavigate();
    let handleCatagoryRoutes = ()=>{
        navigate(`/shop/${catagory}`)
    }
//   console.log(items, catagory);
    return (
      <div className="category-preview-container">
      <h1>
        <span onClick={handleCatagoryRoutes} className="title">{catagory.toUpperCase()}</span>
      </h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <ProductCard key={item.id} prod={item} />
          ))}
      </div>
    </div>
  );
};

export default CatagoryItemsPreview;
