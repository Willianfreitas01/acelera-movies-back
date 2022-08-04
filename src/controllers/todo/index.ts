import { response } from "express"
import { request } from "http"
import { getRepository } from "typeorm"
import { Movie } from "@models/entity/ToDo"
import { Login } from "@models/entity/login"

export const itsWorks = (request, response) => {
  return response.json({ message: "It's Works!!" })
}
export const getTODO = (request, response) => {
  return response.json({ todos: [] })
}
export const postMovies = async (request, response) => {
  const movieRepository = getRepository(Movie)
  const movieEntitySaved = await movieRepository.save(request.body)
  return response.json(movieEntitySaved)
}
export const getMovies = async (request, response) => {
  const movieRepo = getRepository(Movie)
  const moviesFind = await movieRepo.find()
  return response.json(moviesFind)
}

export const getLogin = async (request, response) => {
  const loginRepository = getRepository(Login)
  const login = await loginRepository.find()
  return response.json(login)
}

export const getMoviesId = async (request, response) => {
  const movieRepo = getRepository(Movie)
  const moviesFind = await movieRepo.findOne(request.params.id)
  return response.json(moviesFind)
}

export const deleteMovies = async (request, response) => {
  const pullMovies = getRepository(Movie)
  const moviesDelete = await pullMovies.delete(request.body)
  return response.json(moviesDelete)
}
