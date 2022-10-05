import jsonServer from "json-server";

import auth from "json-server-auth";

const app = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

app.db = router.db;

app.use(middlewares);
app.post("/login", (req, res, next) => {
  res.header(
    "Set-Cookie",
    "token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluYUBtYWlsLnJ1IiwiaWF0IjoxNjY0ODI5ODE5LCJleHAiOjE2NjQ4MzM0MTksInN1YiI6IjUifQ.JFdt4MYiWpPz1arixawMUpKMIiNk9E9YXg6smItXvYM; HttpOnly"
  );
  next();
});
app.use(auth);

app.use(router);

app.listen(3000, () => console.log("Server started"));
