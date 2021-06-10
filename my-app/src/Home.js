import React from 'react'
import {useState } from 'react';
import axios from 'axios'
import Login_register from './Login_register.js'
import './home.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function Home() {
    const [City, setCity] = useState(''); 
    const [plant_no, setplant_no] = useState(""); 
    const [tree_no, settree_no] = useState(''); 
    const [plant_names, setplant_names] = useState(''); 
    const [tree_names, settree_names] = useState(''); 
    const [data , setData] = useState(null) ;

    function handleChange(event){
        setCity(event.target.value);
        axios.get("http://localhost:5000/").then(response =>{
        setData(response.data) ;
      })
      }
     

    function  handleSubmit(event) {
      event.preventDefault();
      console.log(data) ;
      alert("the value you chose is "+City) ;
      if(City==="Select one option"){
        alert("select one city") ;
      }else{
        data.map(info=>{
          if(info.id===City){
            setplant_no("No of plants in the city is :- " +info.no_plant);
            settree_no("No of Trees in the city is :- "+info.no_tree) ;
            setplant_names("All plants available are :- "+info.plant_name) ;
            settree_names("All trees available are :- "+info.tree_name) ;
          }else{
            console.log("data not found") ;
          }
        })
      }
      }


    return (
        <div className="home_container">
           <div className="home_container_1">
                <div className="container_1_data">
                 <div className="select_city">
                 <form onSubmit={handleSubmit}>
        <label>
            Select your City
          <select value={City} onChange={handleChange}>
            <option value="Select one option">Select one option</option>
            <option value="Bulandshahr">Bulandshahr</option>
            <option value="Meerut">Meerut</option>
            <option value="Noida">Noida</option>
            <option value="Ghaziabaad">Ghaziabaad</option>
            <option value="Alighar">Alighar</option>
            <option value="Delhi">Delhi</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
                 <div className="city_data">
                   <div className="no_plant">{plant_no}</div>
                   <div className="no_Tree">{tree_no}</div>
                   <div className="plant_name"> {plant_names}</div>
                   <div className="Tree_name"> {tree_names}</div>
                   <div className="extra information"></div>
                 </div>
      </form>
                 </div>
                </div>
           </div>
        </div>
    )
}

export default Home
