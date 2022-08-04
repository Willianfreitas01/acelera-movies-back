import {
  deleteMovies,
  getLogin,
  getMovies,
  getMoviesId,
  getTODO,
  itsWorks,
  postMovies,
  putMovies,
} from "@controllers/todo"
import { getRepository } from "typeorm"
export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)
  app.get("/movies", getMovies)
  app.get("/login", getLogin)
  app.get("/movies/:id", getMoviesId)
  app.post("/movies", postMovies)
  app.delete("/movies/:id", deleteMovies)
  app.put("/movies/:id", putMovies)
}
