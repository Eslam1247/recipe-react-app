import React from "react";

import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Categories from "./pages/Categorie";

import "./App.css";
// const LazyLoad = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/* <Route
          path="/"
          index
          element={
            <React.Suspense fallback={<Loader />}>
              <LazyLoad />
            </React.Suspense>
          }
        /> */}
        <Route path="/" index element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
