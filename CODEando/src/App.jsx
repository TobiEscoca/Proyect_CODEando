import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import nav from "./ui/nav";
import "./App.css";

const App = () => {
  return (
    <div>
      {nav()}
      <h1>CODEando</h1>
    </div>
  );
};
export default App;
