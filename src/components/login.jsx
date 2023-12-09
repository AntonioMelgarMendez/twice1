// NavbarCenteredWithLogo.js


import React, {useState,useEffect}from 'react';
import '../login.css';
import image1 from '../sources/user-regular.svg'
import image2 from '../sources/star-regular.svg'
import image3 from '../sources/envelope-regular.svg'
const Login = () => {
    const [action, setAction] = useState("Sign Up");

    // Estado para almacenar las coordenadas del ratón
    const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
  
    // Función para actualizar las coordenadas del ratón al moverlo
    const handleMouseMove = (e) => {
      setMouseCoordinates({ x: e.clientX, y: e.clientY });
    };
  
    // Agrega un event listener cuando el componente se monta
    useEffect(() => {
      document.addEventListener('mousemove', handleMouseMove);
      // Limpia el event listener cuando el componente se desmonta
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline1'></div>
        </div>
        <div className='inputs'>
            {action==="Login"?<div></div>:              <div className="input">
                <img src={image1} alt="" />
                <input type="text" placeholder='Name'/>
              </div>}

              <div className="input">
                <img src={image3} alt="" />
                <input type="email" placeholder='Email'/>
              </div>
              <div className="input">
                <img src={image2} alt="" />
                <input type="password" placeholder='Password'/>
              </div>
              {action==="Sign Up" ? <div></div>:<div className="forgot-password">
                Lost Password?
                <span>Click Here!</span>
              </div>}
              
              <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>
                    Sign Up
                </div>
                <div className={action==="Sign Up" ? "submit gray":"submit"}onClick={()=>{setAction("Login")}}>
                    Login
                </div>
              </div>
        </div>
        <div className="sparkles-container">
        {/* Brillitos que siguen el ratón */}
        <div className="sparkle" style={{ top: mouseCoordinates.y, left: mouseCoordinates.x }}></div>
        <div className="sparkle" style={{ top: mouseCoordinates.y + 10, left: mouseCoordinates.x + 10 }}></div>
        {/* Agrega más brillitos según sea necesario */}
      </div>
    </div>
  );
};

export default Login;
