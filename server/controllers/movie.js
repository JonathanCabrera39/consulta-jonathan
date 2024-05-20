async function createMovie(req, res) {
  res.status(200).send(req.body);

  const newestMovie = new Movie(req.body)

  req.file

  console.log(newestMovie)
 res.status(200).send({mng: "ok"})
}

module.exports = {
    
  createMovie,
};
