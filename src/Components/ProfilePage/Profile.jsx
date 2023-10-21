import React, { useEffect, useState } from 'react';
import Style from './StyleProfile.module.scss'
import Image from "../../Assets/image 14.png"


const Profile = () => {
const [profileData , setProfileData] = useState({});
const [cardData , setCardData] = useState([]);

useEffect(() => {
  const profile = JSON.parse(localStorage.getItem("registrationData"))
  setProfileData(profile)

  const card = JSON.parse(localStorage.getItem("selected"))
  setCardData(card);
},[])



  return (
    <div className={Style.main}>
      <div className={Style.left}>
        <img src={Image} alt="Profile Image" className={Style.img} />
      </div>
      <div className={Style.right}>
        <div className={Style.textcontainer}>
          <p className={Style.name}>{profileData.name}</p>
          <p className={Style.email}>{profileData.email}</p>
          <h2 className={Style.username}>{profileData.userName}</h2>
        </div>
        <div className={Style.scroll}>
          <div className={Style.tagcontainer}>
            {
              cardData.map((name , index) => (
                <span className={Style.tags} key={index}>{name}</span>
              ))
            }
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Profile



