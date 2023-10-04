import React from 'react'
import Style from "./Button.module.scss"

const Button = ({Text , parentfunction}) => {


  const handleButtonClick = () => {
    parentfunction();
  }

  return (
    <div>
        <button className={Style.btn} onClick={handleButtonClick} >{Text}</button>
    </div>
  )
}

export default Button