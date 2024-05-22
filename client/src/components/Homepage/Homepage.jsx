import React from 'react'
import './Homepage.css'
import ProfileSide from '../ProfileSide/ProfileSide'
import PostSide from '../PostSide/PostSide'
import RightSide from '../RightSide/RightSide'

const Homepage = () => {
  return (
    <div className="Homepage">
        <ProfileSide/>
        <PostSide/>
        <RightSide/>
    </div>
  )
}

export default Homepage