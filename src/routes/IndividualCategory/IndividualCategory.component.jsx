import "./individul-category.styles.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../redux-store/categories/categories.selectors";

import ProductCard from "../../components/product-card/ProductCard.component";

const IndividualCategory = () => {
  let { catagory } = useParams();
   let apparelsMapping = useSelector(selectCategoriesMap);
  let [ product, setProduct ] = useState(apparelsMapping[catagory]);
    
    useEffect(() => {
        setProduct(apparelsMapping[catagory]);
    }, [apparelsMapping, catagory]);

  return (
    <>
    {console.log('render individual category component')}
      <h1 className="title">{catagory.toUpperCase()} </h1>
      <div className="individual-category-container">
        {product &&
          product.map((item) => <ProductCard key={item.id} prod={item} />)}
      </div>
    </>
  );
};

export default IndividualCategory;
