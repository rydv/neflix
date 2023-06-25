import { useEffect, useState } from "react"
import { Featured } from "../../components/featured/Featured"
import List from "../../components/list/List"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss";
import axios from "axios";


const Home = () => {
  // const [type,setType] = useState("")
  const arg = window.location.pathname.split('/')[1] 
  const types= ['series','movie']
  const type = types.includes(arg) ? arg : "";
  const [lists,setLists] = useState([]);
  const [genre,setGenre] = useState(null);
  useEffect(()=>{
    const getRandomLists = async () =>{
      try {  
        const res = await axios.get(`lists${type ? "?type="+type : ""}${genre ? "&genre=" + genre : ""}`,{
          headers:{
            token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
          }
        });
        setLists(res.data)
      } catch (err) {
        console.log(err)
      };
    }
    getRandomLists()
  },[type, genre])

  return (
    <div className="home">
        <Navbar/>
        <Featured type={type}/>
        {lists.map(list=>(
          <List list={list}/>
        ))}
    </div>
  )
}

export default Home