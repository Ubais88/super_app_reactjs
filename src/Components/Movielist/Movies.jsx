import React from 'react'
import CategoryWiseResult from './CategoryWiseResult'
import Style from "./Movies.module.scss"
import Image from "../../Assets/moviepage.png"
import { useNavigate } from 'react-router-dom'

const Movies = () => {
    const navigate = useNavigate()
  return (
    <div className={Style.top}>
        <div className={Style.txtcontainer}>
            <div>
                <h1 className={Style.title}>Super app</h1>
                <p>Entertainment according to your choice</p>
            </div>
            <div>
                <img src={Image} alt="Image" onClick={() => navigate("/profile")} />
            </div>
        </div>
        <CategoryWiseResult/>
    </div>
  )
}

export default Movies