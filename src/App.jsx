import React, { use } from "react";
import Home from "./components/Home";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Details from "./components/Details";
import Create from "./components/Create";


function App() {
 const {search, pathname} = useLocation();
 console.log(search);
 console.log(pathname);


  return (
    <div className="w-screen h-screen flex">

      {(pathname != "/" || search.length>0 ) && (
          <Link to="/" className="text-red-300 text-2xl font-semibold absolute top-[4%] left-[17%]">
            Home</Link>
          )}

      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
