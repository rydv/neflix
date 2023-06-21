import { useContext, useEffect, useState } from "react";
import "./newList.css";
import { createMovie, getMovies } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { ListContext } from "../../context/listContext/ListContext";
import Select from 'react-select';
import { createList } from "../../context/listContext/apiCalls";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function NewList() {
  const [list, setList] = useState(null);
  const history = useHistory()
  const {dispatch} = useContext(ListContext);
  const {movies, dispatch: dispatchMovie} = useContext(MovieContext);

  useEffect(()=>{
    getMovies(dispatchMovie)
  },[dispatchMovie])

  const handleChange = (e) => {
    const value = e.target.value;
    setList({...list, [e.target.name]:value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    createList(list,dispatch)
    history.push("/lists")
  }
  const handleSelect = (e) =>{
    console.log(e)
    setList({...list,['content']:e.map(item=>item.value)})
  }

  console.log(list)
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="title" name="title" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="genre" name="genre" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Type</label>
          <select name="type" onChange={handleChange}>
            <option value="type">Type</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Content</label>
          <Select isMulti onChange={handleSelect}
          options={
            movies.map((movie)=>(
              {value: movie._id, label:movie.title}
            ))
          }/>
        </div>
      </form>
        <button className="addProductButton" onClick={handleSubmit}>Create</button>
    </div>
  );
}
