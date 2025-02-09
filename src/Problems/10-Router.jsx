import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import One from "./01-Hello_World";
import Two from "./02-UseState";
import Three from "./03-Forms";
import Lists from "./04-Lists";
import Toggle from "./05-Toggle";

const Router = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/one">One</Link>
          </li>
          <li>
            <Link to="/two">Two</Link>
          </li>
          <li>
            <Link to="/three">Three</Link>
          </li>
          <li>
            <Link to="/four">Four</Link>
          </li>
          <li>
            <Link to="/five">Five</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/one" element={<One />}></Route>
        <Route path="/two" element={<Two />}></Route>
        <Route path="/three" element={<Three />}></Route>
        <Route path="/four" element={<Lists />}></Route>
        <Route path="/five" element={<Toggle />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
