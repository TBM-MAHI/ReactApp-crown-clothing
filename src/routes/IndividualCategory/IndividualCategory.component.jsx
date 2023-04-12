import "./individul-category.styles.scss";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ApparelsContext } from "../../context/productCatagories.context";
import ProductCard from "../../components/product-card/ProductCard.component";

const IndividualCategory = () => {
  let { catagory } = useParams();
  console.log(catagory);
  let { apparelsMapping } = useContext(ApparelsContext);
  let [ product, setProduct ] = useState(apparelsMapping[catagory]);
    
    useEffect(() => {
        setProduct(apparelsMapping[catagory]);
    }, [apparelsMapping, catagory]);

  return (
    <>
      <h1 className="title">{catagory.toUpperCase()} </h1>
      <div className="individual-category-container">
        {product &&
          product.map((item) => <ProductCard key={item.id} prod={item} />)}
      </div>
    </>
  );
};

export default IndividualCategory;
