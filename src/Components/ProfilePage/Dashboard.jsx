import React from 'react'
import Profile from './Profile'
import Notes from './Notes'
import Timer from './Timer'
import Weather from './Weather'
import News from './News.jsx'
import Style from "./Dashboard.module.scss"
import Button from '../Common/Button'
import { useNavigate } from 'react-router-dom'


const ProfilePage = () => {
  // const navigate = useNavigate();

  // const handlesubmit = () => {
  //   navigate("/movies")
  // }

  return (
    <div className={Style.mainBtn}>
      <div className={Style.main}>
        <div className={Style.tnpwContainer}>
          <div className={Style.npwContainer}>
            <div className={Style.profileweatherContainer}>
                <div className={Style.profile}><Profile/></div>
                {/* <div className={Style.weather}><Weather/></div> */}
            </div>
            <div className={Style.notes}><Notes/></div>
          </div>
          <div className={Style.timer}><Timer/></div>
        </div>
        <div className={Style.newssection}>
          <div className={Style.news}><News/></div>
        </div>
      </div>
      <div className={Style.btn}>
        {/* <Button Text={"Browse"} parentfunction={handlesubmit} /> */}
      </div>
    </div>
  )
}

export default ProfilePage