import React from "react"

import plus from "../../images/plus.png"
import minus from "../../images/minus.png"
import ModalImage from "../../images/station.jpg"

import Button from "../UI/Button"

import classes from "./Modal.module.css"

const Modal = (props) => {
  return (
    <div className={classes.modal}>
      <Button src={minus} />
      <img src={props.src || ModalImage} alt="Radio station" />
      <Button src={plus} />
    </div>
  )
}

export default Modal
