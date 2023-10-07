import React from 'react';
import Style from './StyleProfile.module.scss'
import Image from "../../Assets/image 14.png"


const Profile = () => {
  return (
    <div className={Style.main}>
      <div className={Style.left}>
        <img src={Image} alt="Profile Image" className={Style.img} />
      </div>
      <div className={Style.right}>
        <div className={Style.textcontainer}>
          <p className={Style.name}>KK Vinay</p>
          <p className={Style.email}>Vinay090@gmail.com</p>
          <h2 className={Style.username}>vinay060</h2>
        </div>
        <div className={Style.scroll}>
          <div className={Style.tagcontainer}>
            <span className={Style.tags}>Horror</span>
            <span className={Style.tags}>Drama</span>
            <span className={Style.tags}>Fantasy</span>
            <span className={Style.tags}>Action</span>
            <span className={Style.tags}>Action</span>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Profile



