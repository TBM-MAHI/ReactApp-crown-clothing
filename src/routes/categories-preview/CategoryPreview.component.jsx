import { useSelector } from "react-redux";

import CatagoryItemsPreview from "../../components/catagory-preview/CatagoryItemsPreview.component";
import {
  selectCategoriesMap,
  selectCategory_Is_Loading,
} from "../../redux-store/categories/categories.selectors";
import Spinner from "../../components/Spinner/Spinner";

const CategoryPreview = () => {
  let apparelsMapping = useSelector(selectCategoriesMap);
  let isLoading = useSelector(selectCategory_Is_Loading);
  // console.log("appreal items category preview", apparelsMapping);
  let indivudualApparelCategory = Object.keys(apparelsMapping);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {indivudualApparelCategory &&
            indivudualApparelCategory.map((catagory) => (
              <CatagoryItemsPreview
                key={catagory}
                catagory={catagory}
                items={apparelsMapping[catagory]}
              />
            ))}
        </>
      )}
    </>
  );
};

export default CategoryPreview;
