const Film = require("../model/film");

exports.createFilm = async (req, res) => {
  try {
    const newFilm = new Film(req.body);
    const savedFilm = await newFilm.save();
    res.status(201).json(savedFilm);
  } catch (error) {
    res
      .status(500)
      .json({ error: "No se pudo crear la película. Error: " + error.message });
  }
};

exports.getAllFilms = async (req, res) => {
  try {
    const films = await Film.find();
    res.json(films);
  } catch (error) {
    res
      .status(500)
      .json({
        error: "No se pudieron obtener las películas. Error: " + error.message,
      });
  }
};

exports.getFilmById = async (req, res) => {
  try {
    const film = await Film.findById(req.params.id);
    if (!film) {
      res.status(404).json({ error: "Película no encontrada." });
    } else {
      res.json(film);
    }
  } catch (error) {
    res
      .status(500)
      .json({
        error: "No se pudo obtener la película. Error: " + error.message,
      });
  }
};

exports.updateFilm = async (req, res) => {
  try {
    const updatedFilm = await Film.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedFilm) {
      res.status(404).json({ error: "Película no encontrada." });
    } else {
      res.json(updatedFilm);
    }
  } catch (error) {
    res
      .status(500)
      .json({
        error: "No se pudo actualizar la película. Error: " + error.message,
      });
  }
};

exports.deleteFilm = async (req, res) => {
  try {
    const deletedFilm = await Film.findByIdAndDelete(req.params.id);
    if (!deletedFilm) {
      res.status(404).json({ error: "Película no encontrada." });
    } else {
      res.json(deletedFilm);
    }
  } catch (error) {
    res
      .status(500)
      .json({
        error: "No se pudo eliminar la película. Error: " + error.message,
      });
  }
};
