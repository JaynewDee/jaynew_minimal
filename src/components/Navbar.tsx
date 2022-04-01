import React from 'react'
import Link from './Link';
import Brand from './Brand';

const Navbar:React.FC = () => {
  return (

    <div id="navBox">
       <Brand />
       <div id="linkBox">
         <Link name="Link 1" />
         <Link name="Link 2" />
         <Link name="Link 3" />
         <Link name="Link 4" />
       </div>
    </div>

  )
}

export default Navbar;