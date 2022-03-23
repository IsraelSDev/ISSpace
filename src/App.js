import React, { } from "react";
import { } from './app.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/Home/Home';
import Crew from './screens/Crew/Crew';
import Destination from './screens/Destination/Destination';
import Technology from './screens/Technology/Technology';
import NoFound from "./screens/NoFound/NoFound";

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />

        <Route path="*" element={<NoFound />} />
      </Routes>
    </BrowserRouter>
  </>);
}

export default App;
