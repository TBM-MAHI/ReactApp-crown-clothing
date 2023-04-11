import "./CategoryDirectotyItems.component.scss";
import { useNavigate } from "react-router-dom";
let CategoryDirectoryitems = (props) => {
  let { title, id, imageUrl } = props.catagory;
  let navigate = useNavigate();
  let handleCatagoryRoutes = () => navigate(`/shop/${title}`);
  return (
    <div className="category-container large" key={id}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="category-body-container" onClick={handleCatagoryRoutes}>
        <h2>{title}</h2>
        <p>Shop now </p>
      </div>
    </div>
  );
};

export default CategoryDirectoryitems;
