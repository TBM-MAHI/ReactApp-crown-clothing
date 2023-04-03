import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/Navigation.component";
import Authentication from "./routes/Authentication/Authentication.component";
let Shop=()=> (<h1> SIOP</h1>)
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
