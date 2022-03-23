import React, { } from "react";
import { } from './app.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/Home/Home'
import NoFound from "./screens/NoFound/NoFound";

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/some" element={{}} />

        <Route path="*" element={<NoFound />} />
      </Routes>
    </BrowserRouter>
  </>);
}

export default App;
