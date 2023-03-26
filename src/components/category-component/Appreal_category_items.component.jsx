import './appreal_category-items.component.scss'

let Apprealcategoryitems = (props) => {
    let { title, id, imageUrl } = props.catagory;
    return (
      <div className="category-container large" key={id}>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="category-body-container">
          <h2>{title}</h2>
          <div className="background-image"></div>
          <p>Shop now </p>
        </div>
      </div>
    );
}

export default Apprealcategoryitems;