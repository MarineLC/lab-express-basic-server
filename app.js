// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`

// CREATE EXPRESS APP
// Here you should create your Express app:

const express = require("express");

const app = express();
const projects = require("./data/projects.json");
const articles = require("./data/articles.json");
app.use(express.json());

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (request, response) => {
  response.sendFile(__dirname + "/views/blog.html");
});
app.get("/*", (request, response) => {
  response.sendFile(__dirname + "/views/not-found.html");
});

app.get("/api/projects", (request, response) => {
  response.json(projects);
});

app.get("/api/articles", (request, response) => {
  response.json(articles);
});

app.get("/api/books", (_, response) => {
  const books = [
    { title: "Rick&Morty", pages: 35 },
    { title: "Solo Leveling", pages: 150 },
    { title: "Arslan", pages: 150 },
  ];

  response.json(books);
});

app.listen(5005, () => console.log("My first app listening on port 5005!"));

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests

// ROUTES
// Start defining your routes here:

// START THE SERVER
// Make your Express server listen on port 5005:
