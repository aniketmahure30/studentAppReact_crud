import React from "react";
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CreateStudent from "./components/CreateStudent";
import Students from "./components/Students";
import StuRoutes from "./routes/StudentRoutes";

let App=()=> {
  return (
    <div className="App">
          <Router>
            <Navbar/>
                <StuRoutes/>
          </Router>
    </div>
  );
}

export default App;
