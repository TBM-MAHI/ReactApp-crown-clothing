
import { useSelector} from 'react-redux'
import CatagoryItemsPreview from "../../components/catagory-preview/CatagoryItemsPreview.component";
import { selectCategoriesMap } from '../../redux-store/categories/categories.selectors';

const CategoryPreview = () => {
  let apparelsMapping = useSelector(selectCategoriesMap);
 // console.log("appreal items category preview", apparelsMapping);
 let indivudualApparelCategory = Object.keys(apparelsMapping);
  return (
    <> 
      {indivudualApparelCategory && indivudualApparelCategory.map((catagory) => (
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
