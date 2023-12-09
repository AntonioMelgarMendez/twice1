// AboutPage.js
import React from 'react';
import Navbar from "./components/navbar";
import Schedules from "./components/schedule"
import Foot from './components/footer'
import './schedule.css'; 
const Schedule = () => {
  return (
    <div >
      
      <div className='main'>
        <Navbar/>

      </div>
      <div className='main1'>
            <Schedules/>
        <Foot/>
      </div>
   
   

    </div>
  );
}

export default Schedule;