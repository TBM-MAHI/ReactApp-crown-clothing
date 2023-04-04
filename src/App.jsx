import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import  Shop  from "./routes/shop/Shop.component";
import Navigation from "./routes/navigation/Navigation.component";
import Authentication from "./routes/Authentication/Authentication.component";

let App = () => {
  return (
    <Routes>
      <Route path="/" element=<Navigation />>
        <Route index={true} element=<Home /> />
        <Route path="shop" element=<Shop /> />
        <Route path="auth" element=<Authentication /> />
      </Route>
    </Routes>
  );
};

export default App;

 