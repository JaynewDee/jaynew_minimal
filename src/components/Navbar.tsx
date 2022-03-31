import React from 'react'
import Link from './Link';

const Navbar:React.FC = () => {
  return (

    <div id="navBox">
       <h1 id="lunacy">Lunacy SoftWorks</h1>
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