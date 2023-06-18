import axios from "axios";
import { createMovieFailure, createMovieStart, createMovieSuccess,deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, getMoviesFailure, getMoviesStart, getMoviesSuccess } from "./MovieActions";
//getmovies
export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get("/movies",{
      headers: {
        // token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Njk5ZjIzOTliZDUwYjJhMWFmMmFmYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4Njk5MzE4NiwiZXhwIjoxNjg3NDI1MTg2fQ.IGlYCQNzbghpjkT8WwcnyUrsEemNPXqSFxVYh4OfUkE",
    },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch(getMoviesFailure);
  }
};

//createMovie
export const createMovie = async (movie,dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await axios.post("/movies/",movie,{
      headers: {
        // token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Njk5ZjIzOTliZDUwYjJhMWFmMmFmYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4Njk5MzE4NiwiZXhwIjoxNjg3NDI1MTg2fQ.IGlYCQNzbghpjkT8WwcnyUrsEemNPXqSFxVYh4OfUkE",
    },
    });
    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    dispatch(createMovieFailure());
  }
};

//delete
export const deleteMovie = async (id,dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await axios.delete("/movies/"+id,{
      headers: {
        // token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Njk5ZjIzOTliZDUwYjJhMWFmMmFmYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4Njk5MzE4NiwiZXhwIjoxNjg3NDI1MTg2fQ.IGlYCQNzbghpjkT8WwcnyUrsEemNPXqSFxVYh4OfUkE",
    },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    dispatch(deleteMovieFailure());
  }
};
