const express = require("express");
const router = express.Router();
const filmController = require("../controller/film");

router.post("/addNewFilm", filmController.createFilm);
router.get("/retrieveAllFilms", filmController.getAllFilms);
router.get("/retrieveFilm/:id", filmController.getFilmById);
router.put("/updateFilm/:id", filmController.updateFilm);
router.delete("/removeFilm/:id", filmController.deleteFilm);

module.exports = router;
