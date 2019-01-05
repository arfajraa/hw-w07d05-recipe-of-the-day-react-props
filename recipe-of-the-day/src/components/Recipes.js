import React, {Component} from 'react';
import Recipe from './Recipe';
import recipes from '../data/recipes';
import '../App.css';

class Recipes extends Component{

    renderRecipes(){
        const recipeElements = recipes.map((recipe, index) =>{
            return (
                <Recipe key={index} recipe ={recipe}/>
            )
        })
        return recipeElements;
    }
    render(){
        return (
            <div className="recipes">
            <h1>Recipes</h1>
            {this.renderRecipes()}
            </div>
        )
    }
}

export default Recipes;