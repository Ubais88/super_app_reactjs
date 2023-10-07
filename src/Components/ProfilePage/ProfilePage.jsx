import React from 'react'
import Profile from './Profile'
import Weather from './Weather'
import News from './News.jsx'
import Style from "./ProfilePage.module.scss"


const ProfilePage = () => {
  return (
    <div className={Style.main}>
    <div className={Style.left}>
      <div className={Style.profile}>
          <Profile/>
      </div>
      <div className={Style.weather}>
        <Weather/>
      </div>
    </div>
    <div className={Style.right}>
      <div>
        <News/>
      </div>
    </div>
    </div>
  )
}

export default ProfilePage