const express = require("express")
const cors = require("cors")

const app = express()

const PORT = 5000

app.use(express.json())
app.use(cors())

const stationListBE = [
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

// Routes
app.get("/", (req, res) => res.send("API is running"))

app.get("/stations", (req, res) => res.send(stationListBE))

app.listen(PORT, () => console.log("Server is running on PORT"))
