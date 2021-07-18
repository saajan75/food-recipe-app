import React, { useState } from 'react';
import './App.css';
import Axios from "axios";
import Recipes from './Recipes';

const App = () => {
const [query, setQuery] = useState("");
const [recipes, setRecipes] = useState([]);
const [healthLabels, setHealthLabels] = useState("vegan");

    const YOUR_APP_ID = "c593ba2b";
const YOUR_APP_KEY = "3115f63e9fbfd3c4163f823acd7e9a06";
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;

async function getRecipes(){
  
  var result = await Axios.get(url);
  setRecipes(result.data.hits);
  // console.log(result.data);
}
 
const onSubmit = (e) =>{
  e.preventDefault();
  getRecipes();
}
  return (
    <div className = "app">
    <h1>BOB'S FOOD PLAZA!!</h1>
    <form className = "app-searchForm" onSubmit ={onSubmit}>
      <input type="text" 
      className = "app-input"
      placeholder = "!!...Enter...!!" 
      value = {query} onChange ={(e) => setQuery(e.target.value)}
      />
       <input className = "app-search" type="submit" value = "Search"/>

       <select className="app-healthlabels">
       <option onClick = {() =>setHealthLabels("vegan")}> Vegan </option> 
       <option onClick = {() =>setHealthLabels("vegetarian")}> Vegetarian </option> 
       <option onClick = {() =>setHealthLabels("non-veg")}> Non-Veg </option> 
       <option onClick = {() =>setHealthLabels("dairy-free")}> Dairy-Free </option> 
       <option onClick = {() =>setHealthLabels("sweet")}> Sweet </option> 
       </select>
    </form>

    <div className = "app-recipe">
      {recipes.map((recipe) =>{
      return <Recipes recipe ={recipe}/>})}
    </div>
    </div>
  );
}

export default App;
