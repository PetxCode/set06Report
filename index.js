const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const url = "mongodb://localhost/report";
const urlOnline =
	"mongodb+srv://PeterPan:PeterPan@codelab.eqkgv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const onlineURL = "mongodb+srv://PeterPan:PeterPan@codelab.eqkgv.mongodb.net/set06report?retryWrites=true&w=majority"

const port = process.env.PORT || 2234;

mongoose.connect(onlineURL).then(() => {
	console.log("database connected...!");
});

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });


app.use(cors({
    origin: '*'
}));

app.use(express.json());

app.use("/user", require("./routes/userRouter"));

app.listen(port, () => {
	console.log(`server is now listening to port on: ${port}`);
});
