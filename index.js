const express = require("express")
const cors = require("cors")
const connectDB = require("./db.js")
const userRoute = require("./routes/auth.js");
const artistRoute = require("./routes/artist.js")
const albumRoute = require("./routes/album.js")
const songRoute = require("./routes/song.js")
require("dotenv").config()

const PORT = 9695 || process.env.PORT

const app = express();

//middleware
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
    return res.json("Online Music Player")
})

//user authentication  route 
app.use("/app/users", userRoute)

//Album Routes
app.use("/app/albums", albumRoute)

//Artist Routes
app.use("/app/artists", artistRoute)

//Songs Routes
app.use("/app/songs", songRoute)

//database connection
connectDB()

//listening PORT
app.listen(PORT, () => { console.log(`listening server in ${PORT} `) })
