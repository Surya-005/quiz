import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'

function Nav() {
  return (
    <div id="logo">
      <Link to="/">
      <span className='v'>Q<span className="q">UIZ</span></span>
      </Link>
      </div>
  )
}

export default Nav