const apprealCatagory = [
  {
    id: 0,
    title: "hats",
  },
  {
    id: 1,
    title: "jackets",
  },
  {
    id: 2,
    title: "sneakers",
  },
  {
    id: 3,
    title: "womens",
  },
  {
    id: 3,
    title: "mens",
  },
];

let App = () => {
  return (
   
    <div className="catagories-container">
      <h2>tg</h2>
      {apprealCatagory.map(catagory => {
        console.log(catagory.title);
        return (
          <div className="catagory-container">
            <img src="" alt="" />
            <div className="catagory-body-conatainer">
              <h2>{catagory.title}</h2>
              <div className="background-image"></div>
              <p>Shop now </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
