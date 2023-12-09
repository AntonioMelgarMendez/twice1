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
       <Route path="twice1/" element={<Main/>}></Route>
        <Route path="twice1/home" element={<Main/>}></Route>
        <Route path="twice1/profile" element={<Profile/>}></Route>
        <Route path="twice1/discography" element={<Discography/>}></Route>
        <Route path="twice1/fanclub" element={<FanClub/>}></Route>
        <Route path="twice1/schedule" element={<Schedule/>}></Route>
        <Route path="twice1/news" element={<News/>}></Route>
        <Route path="twice1/mobile" element={<Mobile/>}></Route>
        <Route path="twice1/special" element={<Special/>}></Route>
       </Routes>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
