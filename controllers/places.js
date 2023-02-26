const router = require("express").Router();
const db = require("../models");
// index
router.get("/", (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render("places/index", { places });
    })
    .catch((err) => {
      console.log(err);
      res.render(404);
    });
});
// create
router.post("/", (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});
//  new
router.get("/new", (req, res) => {
  res.render("places/new");
});
//  show
router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

// delete
router.delete("/:id", (req, res) => {
  db.Place.deleteOne({ id: req.params.id })
    .then(() => res.redirect("/places"))
    .catch((err) => {
      console.log(err);
      res.status(404).render("error404");
    });
});

//  put
router.put("/:id", (req, res) => {
  res.send("PUT /places/:id stub");
});
// edit
router.get("/:id/edit", (req, res) => {
  res.send("GET edit form stub");
});
module.exports = router;