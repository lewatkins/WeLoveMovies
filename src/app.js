if (process.env.USER) require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

// Start of sample code - GW
 
const errorHandler = require("./errors/errorHandler");
const moviesRouter = require("./movies/movies.router");
const theatersRouter = require("./theaters/theaters.router");
const reviewsRouter = require("./reviews/reviews.router");
const notFound = require("./errors/notFound");
 
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => res.status(301).redirect('/movies'));

app.use("/movies", moviesRouter);
app.use("/theaters", theatersRouter);
app.use("/reviews", reviewsRouter);

app.use(notFound);
app.use(errorHandler);
 
//end of sample code - GW

module.exports = app;
