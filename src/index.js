const express = require("express");
const dataSource = require("./utils").dataSource;
const wilderController = require("./controller/WilderController");
const skillsController = require("./controller/SkillsController");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world from express");
});

app.post("/api/wilder", wilderController.create);
app.get("/api/wilder", wilderController.read);
app.put("/api/wilder/:id", wilderController.update);
app.delete("/api/wilder/:id", wilderController.delete);
app.put("/api/addskill", wilderController.addSkill);

app.post("/api/skill", skillsController.create);
app.get("/api/skill", skillsController.read);
app.put("/api/skill/:id", skillsController.update);
app.delete("/api/skill/:id", skillsController.delete);

const start = async () => {
  await dataSource.initialize();
  app.listen(3000, () => console.log("server started on 3000"));
};

start();
