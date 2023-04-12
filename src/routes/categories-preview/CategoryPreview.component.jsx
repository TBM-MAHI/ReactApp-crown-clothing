import { useContext } from "react";
import CatagoryItemsPreview from "../../components/catagory-preview/CatagoryItemsPreview.component";
import { ApparelsContext } from "../../context/productCatagories.context";

const CategoryPreview = () => {
  let { apparelsMapping } = useContext(ApparelsContext);
  let apparelsItems = Object.keys(apparelsMapping);
    console.log("appreal items category previwe", apparelsItems);
  return (
    <>
      {apparelsItems.map((catagory) => (
        <CatagoryItemsPreview
          key={catagory}
          catagory={catagory}
          items={apparelsMapping[catagory]}
        />
      ))}
    </>
  );
};

export default CategoryPreview;
