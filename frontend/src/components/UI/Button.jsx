import React from "react"

import classes from "./Button.module.css"

const Button = (props) => {
  const clickHandler = () => {
    console.log("Clickable Button")
  }

  return (
    <input
      className={classes.button}
      type={props.type || "image"}
      src={props.src}
      alt={props.alt}
      onClick={clickHandler}
    ></input>
  )
}

export default Button
