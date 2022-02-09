import React, { useEffect, useState } from "react"
import classes from "./App.module.css"
import axios from "axios"

import Card from "./components/Card/Card"
import Header from "./components/Card/Header"
import Main from "./components/Card/Main"
import Footer from "./components/Card/Footer"

let stationList = [
  {
    id: "s1",
    name: "Putin FM",
    rate: "66,6",
  },
  {
    id: "s2",
    name: "Dribble FM",
    rate: "101,2",
  },
  {
    id: "s3",
    name: "Doge FM",
    rate: "99,4",
  },
  {
    id: "s4",
    name: "Ballads FM",
    rate: "87,1",
  },
  {
    id: "s5",
    name: "Maximum FM",
    rate: "142,2",
  },
]

function App() {
  const [currentStation, setCurrentStation] = useState(null)
  const [stationsBe, setStationsBe] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get("http://localhost:5000/stations")
      .then((result) => {
        setStationsBe(result.data)
      })
      .catch((error) => setError(error))
  }, [])

  return (
    <div className={classes.mainContainer}>
      <Card>
        <Header text="stations" />
        <Main
          stations={error ? stationList : stationsBe}
          setStation={setCurrentStation}
        />
        <Footer
          text={currentStation ? "currently playing" : ""}
          currentStation={currentStation}
        />
      </Card>
    </div>
  )
}

export default App
