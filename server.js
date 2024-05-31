const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var cors = require("cors");
const appRoutes = require("./routes");


const corsOptions = {
  origin: ['https://www.digitalascendent.com']
};
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use("/api", appRoutes);

app.use((_, res) =>{
    handleResponseWithStatus(res, 404, false, "Page Not Found!", { status: "error", error: "Page Not Found!"});
});

app.listen(8000, (req, res)=>{
    console.log("Server is listening on port 8000");
})