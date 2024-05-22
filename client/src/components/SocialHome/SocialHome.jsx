import React from 'react'
import './SocialHome.css'
import Homepage from '../Homepage/Homepage'

const socialHome = () => {
  return (
    <div className="socialHome">
        <div className="blur" style={{top: '36%', right: '-8rem'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        <Homepage />
    </div>
  )
}

export default socialHome