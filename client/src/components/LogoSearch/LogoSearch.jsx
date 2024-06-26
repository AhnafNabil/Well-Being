import React from 'react'
import Logo from '../../img/apple-touch-icon.png'
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css'

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
        <img src={Logo} alt="" width="40px"/>
        <div className="Search">
            <input type="text" placeholder='#Explore' />
            <div className="s-icon">
                <UilSearch/>
            </div>
        </div>
    </div>
  )
}

export default LogoSearch