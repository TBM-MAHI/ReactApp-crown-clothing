import Apprealcategoryitems from "../category-component/Appreal_category_items.component.jsx";
import './category-directory.scss'
function CategoryDirectory({ apprealCatagory }) {
   // console.log(apprealCatagory);
  return (
    <div className="categories-container">
      {apprealCatagory.map((catagory) => (
        <Apprealcategoryitems key={catagory.id} catagory={catagory} />
      ))}
    </div>
  );
}

export default CategoryDirectory;
