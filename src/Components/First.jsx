import React from 'react';
import { Link } from "react-router-dom";

const First = () => {
  return (
    <>
    
    <div className="container">
    
      <div className="content">
      <img src="/pixelcut-export.png" alt="Logo" className="logo" style={{width:"430px", height:"430px", }}/>

        <h1 style={{ textAlign: "center" }}>WELCOME TO HACKHALT</h1>
        
        <button className="get-started-button" style={{backgroundColor:"#ffa07a"}}>
          <Link to="/Signup">GET STARTED</Link>
        </button>
      
    </div>
    </div>
    </>
  );
}

export default First;


<style>
  
.container {
  `display: flex;
  background-color:#a8deea
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-left: 500px;`
}

.content {
  `text-align: center;
  display: flex;
  justify-content: space-around;`
}

.get-started-button {
  `padding: 10px 20px;
  font-size: 18px;
  color: #fff;
  background-color: lightsalmon;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;`
}

.get-started-button:hover {
  `background-color: #ffa07a;`
}
</style>
