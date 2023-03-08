const Skills = require("../entity/Skills");
const dataSource = require("../utils").dataSource;

module.exports = {
  create: (req, res) => {
    dataSource
      .getRepository(Skills)
      .save(req.body)
      .then(() => {
        res.send("Skills Created");
      })
      .catch((err) => {
        console.log("error", err);
        res.send("Error while creating the skill");
      });
  },
  read: async (req, res) => {
    try {
      const allSkills = await dataSource.getRepository(Skills).find();
      res.send(allSkills);
    } catch (err) {
      console.log(err);
      res.send("Error while reading the skills");
    }
  },
  delete: async (req, res) => {
    try {
      await dataSource.getRepository(Skills).delete(req.params.id);
      res.send("Skill deleted");
    } catch (err) {
      console.log(err);
      res.send("Error while deleting the skill");
    }
  },
  update: async (req, res) => {
    try {
      await dataSource.getRepository(Skills).update(req.params.id, req.body);
      res.send("Skill updated");
    } catch (err) {
      console.log(err);
      res.send("Error while updating");
    }
  },
};
