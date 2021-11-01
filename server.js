const express = require('express')
const taskRoute = require("./src/task/routes")
const app = express();



const port = 3000;

app.use(express.json())

app.get("/", (req, res) =>
    res.send("Hello!")
)

app.use("/api/v1/tasks", taskRoute);

app.listen(port, () => console.log(`App is running on port ${port}`));

