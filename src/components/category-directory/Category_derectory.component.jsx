import CategoryDirectoryitems from '../category-directory-items-component/CategoryDirectoryitems.component';
import './category-directory.scss'
function CategoryDirectory({ apprealCatagory }) {
   // console.log(apprealCatagory);
  return (
    <div className="categories-container">
      {apprealCatagory.map((catagory) => (
        <CategoryDirectoryitems key={catagory.id} catagory={catagory} />
      ))}
    </div>
  );
}

export default CategoryDirectory;
