import React from 'react'
import Section from './Section';
import CSS from 'csstype';

const sectionStyles = {
   borderTop: '.33rem'
}
const Content:React.FC = (sectionStyles) => {
  return (
    <div id="contentBox">
       <div id="contentSection">
         <Section />
         <Section />
         <Section />
         <Section />
         <Section />
       </div>
    </div>
  )
}

export default Content;