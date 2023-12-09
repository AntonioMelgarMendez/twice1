// App.js

import React from "react";
import Main from "./main";
import Profile from "./Profile";
import Discography from "./discography";
import FanClub from "./Fanclub";
import Schedule from "./Schedule";
import News from "./news";
import Mobile from "./mobile";
import Special from "./special";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route index element ={<Main/>}></Route>
        <Route path="/home" element={<Main/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/discography" element={<Discography/>}></Route>
        <Route path="/fanclub" element={<FanClub/>}></Route>
        <Route path="/schedule" element={<Schedule/>}></Route>
        <Route path="/news" element={<News/>}></Route>
        <Route path="/mobile" element={<Mobile/>}></Route>
        <Route path="/special" element={<Special/>}></Route>
       </Routes>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
