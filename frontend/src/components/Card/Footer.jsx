import React from "react"

import classes from "./Footer.module.css"

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <p>{props.text}</p>
      <h3>{props.currentStation}</h3>
    </footer>
  )
}

export default Footer
