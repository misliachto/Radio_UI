import React from "react"
import Button from "../UI/Button"

import btnBack from "../../images/back-arrow.png"
import btnSwitch from "../../images/switch.png"

import classes from "./Header.module.css"

const Header = (props) => {
  return (
    <header className={classes.header}>
      <Button src={btnBack} alt="back button" />
      <h3>{props.text}</h3>
      <Button src={btnSwitch} alt="switch off" />
    </header>
  )
}

export default Header
