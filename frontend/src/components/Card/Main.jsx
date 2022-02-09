import React, { useState } from "react"
import Modal from "../Modals/Modal"

import classes from "./Main.module.css"

const Main = (props) => {
  const [modalId, setModalId] = useState()

  const onClickHandler = (id, name) => {
    setModalId(id)
    props.setStation(name)
  }

  return (
    <>
      {props.stations.map((item) => (
        <div
          key={item.id}
          className={classes.main}
          onClick={() => onClickHandler(item.id, item.name)}
        >
          {item.id === modalId ? <Modal /> : ""}
          <div className={classes.station}>
            <h4>{item.name}</h4>
            <h4>{item.rate}</h4>
          </div>
        </div>
      ))}
    </>
  )
}

export default Main
