import React from 'react'
import  {Link}  from'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function app(){
  return (
    <div className='navbar'>
      <ul>
           <Link to='/react'><li>company</li></Link>
           <Link to='/about'><li>sales</li></Link>
           <Link to='/services'><li>products</li></Link>
           <Link to='/contact'><li>Contact</li></Link>
           <Link to='/counter'><li>counter</li></Link>

           <Link to='/counter1'><li>counter1</li></Link>
      </ul>
    </div>
  )
}

export default app
