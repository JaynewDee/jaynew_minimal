import React from 'react'
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import Left from '../components/Left';
import Spacebar from '../components/Spacebar';

const Main:React.FC = () => {
  return (
    <div>
       <Navbar />
       <Spacebar />
       <div id="bodyBox">
         <Left />
         <Content />
       </div>
    </div>
    
  )
}

export default Main;