// AboutPage.js
import React from 'react';
import Navbar from "./components/navbar";
import NewScroll from './components/newscroll';
import Foot from './components/footer'
import './news.css'; 
const News = () => {
  return (
    <div >
      <div className='main'>
        <Navbar/>
      </div>
      <NewScroll/>
      <Foot/>
   

    </div>
  );
}

export default News;