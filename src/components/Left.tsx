import React from 'react'
import SideItem from './SideItem'

const Left:React.FC = () => {
  return (
    <div id="leftBox">
         <SideItem key="1"/>
         <SideItem key="2"/>
         <SideItem key="3"/>
         <SideItem key="4"/>
         <SideItem key="5"/>
    </div>
  )
}

export default Left;