import React from 'react'
import "./Recipe.css";
const Recipes = ({ recipe }) => {
    return (
        <div className ="recipes">
            <img className = "recipes-img" src = {recipe["recipe"]["image"]}/>
            <p className= "recipes-label">{recipe["recipe"]["label"]} </p>
        </div>
     
    );
}

export default Recipes;


