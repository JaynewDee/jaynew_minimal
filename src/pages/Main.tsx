import React from 'react'
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import Left from '../components/Left';
import Right from '../components/Right';

const Main:React.FC = () => {
  return (
    <div>
       <Navbar />
       <div id="bodyBox">
         <Left />
         <Content />
         <Right />
       </div>
    </div>
    
  )
}

export default Main;