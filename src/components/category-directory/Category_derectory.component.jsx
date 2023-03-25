import Apprealcategoryitems from "../category-component/Appreal_category-items.component.jsx";
import './category-directory.scss'
function CategoryDerectory({ apprealCatagory }) {
  return (
    <div className="categories-container">
      {apprealCatagory.map((catagory) => (
        <Apprealcategoryitems key={catagory.id} catagory={catagory} />
      ))}
    </div>
  );
}

export default CategoryDerectory;
