import React from 'react'
import Style from "./Button.module.scss"

const Button = ({Text,navigate}) => {

  return (
    <div>
        <button className={Style.btn} >{Text}</button>
    </div>
  )
}

export default Button