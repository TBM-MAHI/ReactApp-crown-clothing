import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/Navigation.component";
import Signin from "./routes/signin/Signin.component";
let Shop=()=> (<h1> SIOP</h1>)
let App = () => {
  return (
    <Routes>
      <Route path="/" element=<Navigation/> >
        <Route index={true} element=<Home/> />
        <Route path="shop" element=<Shop/> />
        <Route path="signin" element=<Signin/> />
      </Route>
    </Routes>
  );
};

export default App;
