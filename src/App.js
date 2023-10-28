import React from "react";
import "./App.css";
import  Navbar  from "./components/Navbar";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;

