import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/Navigation.component";
let Shop=()=> (<h1> SIOP</h1>)
let App = () => {
  return (
    <Routes>
      <Route path="/" element=<Navigation/> >
        <Route path="shop" element=<Shop/> />
        <Route index={true} element=<Home/> />
      </Route>
    </Routes>
  );
};

export default App;
