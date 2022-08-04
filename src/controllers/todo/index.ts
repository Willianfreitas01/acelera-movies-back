import { response } from "express"
import { request } from "http"
import { getRepository } from "typeorm"
import { Movie } from "@models/entity/ToDo"

export const itsWorks = (request, response) => {
  return response.json({ message: "It's Works!!" })
}
export const getTODO = (request, response) => {
  return response.json({ todos: [] })
}
export const postMovies = async (request, response) => {
  try {
    const movieRepository = getRepository(Movie)
    const movieEntity = movieRepository.create(request.body)
    const movieEntitySaved = await movieRepository.save(movieEntity)
    console.log(movieEntitySaved)
    return response.json(movieEntitySaved)
  } catch (error) {
    console.error("alguma coisa")
  }
}
export const getMovies = async (request, response) => {
  const movieRepo = getRepository(Movie)
  const moviesFind = await movieRepo.find()
  return response.json(moviesFind)
}

export const getLogin = (request, response) => {
  return response.json({ user: [] })
}
export const getMoviesId = async (request, response) => {
  const movieRepo = getRepository(Movie)
  const moviesFind = await movieRepo.find()
  const { id } = request.params.id
  return response.json(id, { movies: moviesFind })
}

export const deleteMovies = (request, response) => {}
