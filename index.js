const dotenv = require("dotenv").config()
const express = require("express")
const cors = require("cors")
const server = express()
const port = process.env.PORT || 9000
const path = require("path")

server.use(cors())
server.use(express.json())
server.use(express.static(path.join(__dirname, "client/build")))

server.use("/api/", (_, res) => {
    res.json({ data: "API is accounted for" })
})

server.listen(port, () => {
    console.log(`Server is alive on port ${port}`)
})

// console.log("Its alive!")
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USERNAME)
// console.log(process.env.PORT)
// console.log(process.env.FOOD)
// console.log(process.env.REALLY)
// console.log(process.env.GREET)