import { response } from "express"
import { request } from "http"
import { getRepository, getTreeRepository } from "typeorm"
import { Movie } from "@models/entity/ToDo"
import { Login } from "@models/entity/login"
import { User } from "@models/entity/user"

export const itsWorks = (request, response) => {
  return response.json({ message: "It's Works!!" })
}
export const getTODO = (request, response) => {
  return response.json({ todos: [] })
}
export const postMovies = async (request, response) => {
  const postRepository = getRepository(Movie)
  const postSaved = await postRepository.save(request.body)
  return response.json(postSaved)
}
export const getMovies = async (request, response) => {
  const getMovieRepository = getRepository(Movie)
  const moviesFind = await getMovieRepository.find()
  return response.json(moviesFind)
}
export const getLogin = (request, response) => {
  const { login, password } = request.body
  if (login === "will@gmail.com" && password === "12345") {
    return response.status(200).json({
      auth: true,
      message: "sucesso",
    })
  }
  return response.status(401).json({
    auth: false,
    message: "falha",
  })
}

export const getMoviesId = async (request, response) => {
  const getIdRepository = getRepository(Movie)
  const moviesFind = await getIdRepository.findOne(request.params.id)
  return response.json(moviesFind)
}

export const deleteMovies = async (request, response) => {
  const deleteRepository = getRepository(Movie)
  const moviesDelete = await deleteRepository.delete(request.params.id)
  return response.json(moviesDelete)
}

export const putMovies = async (request, response) => {
  const putRepository = getRepository(Movie)
  const editMovie = await putRepository.update(request.params.id, request.body)
  return response.json(editMovie)
}

export const createUser = async (request, response) => {
  const userRepository = getRepository(User)
  const user = await userRepository.save(request.body)
  return response.json(user)
}
