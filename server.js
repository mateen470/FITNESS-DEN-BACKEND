const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const authRouter = require("./router/authroutes");
const workoutPlanRouter = require("./router/workoutroutes");
const dietPlanRouter = require("./router/dietroutes");
const paymentRouter = require("./router/paymentroute");
const blogRouter = require("./router/blogrouter");
const productRouter = require("./router/productrouter");

require("./database/connection");

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

const whitelist = ["https://fitness-den.netlify.app"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use("/fitness-den", authRouter);
app.use("/fitness-den/workout", workoutPlanRouter);
app.use("/fitness-den/diet", dietPlanRouter);
app.use("/fitness-den/payment", paymentRouter);
app.use("/fitness-den/blog", blogRouter);
app.use("/fitness-den/product", productRouter);

app.get("/", (req, res) => {
  res.json("SERVER STARTED");
});

app.listen(PORT, () => {
  console.log(`APP IS RUNNING ON http://localhost:${PORT}`);
});
