import "./shop.style.scss";
import { useContext, Fragment } from "react";
import ProductCard from "../../components/product-card/ProductCard.component";
import { ApparelsContext } from "../../context/productCatagories.context";

const Shop = () => {
  let { apparelsMapping } = useContext(ApparelsContext);
  let apparelsItems = Object.keys(apparelsMapping);
  console.log(apparelsItems);
  return (
    <Fragment>
      {apparelsItems.map((catagory) => (
        <Fragment>
          <h1>{catagory}</h1>
        <div className="products-container" key={catagory}>
          {apparelsMapping[catagory].map((item) => (
            <ProductCard key={item.id} prod={item} />
          ))}
        </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
