import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'

function Nav() {
  return (
    <div id="logo">
      <Link to="/">
      <span className='q'>Q<span className="uiz">UIZ</span></span>
      </Link>
      </div>
  )
}

export default Nav