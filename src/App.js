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

import { createHashRouter,RouterProvider } from "react-router-dom";
const router = createHashRouter([
  {
    path:"/",
    element:<Main/>
  },
  {
    path:"/home",
    element:<Main/>
  },
  {
    path:"/profile",
    element:<Profile/>
  },
  {
    path:"/discography",
    element:<Discography/>
  },
  {
    path:"/fanclub",
    element:<FanClub/>
  },
  {
    path:"/schedule",
    element:<Schedule/>
  },
  {
    path:"/news",
    element:<News/>
  },
  {
    path:"/mobile",
    element:<Mobile/>
  },
  {
    path:"/special",
    element:<Special/>
  }  

])
function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
