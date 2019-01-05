import React, {Component} from 'react';
import recipeOfTheDay from '../data/recipeOfTheDay';
import Ingredient from './Ingredient';

class RecipeOfTheDay extends Component{

    renderIngredients(){
        const ingredientElements = recipeOfTheDay.ingredients.map((ingredient, index) =>{
            return (
                <Ingredient key={index} ingredient={ingredient}/>
            )
        })
        return ingredientElements;
    }

    render(){
        return (
            <div className="recipeOfTheDay">
            <h1>Recipe of the Day</h1>
            <h4>{recipeOfTheDay.name}</h4>
            <img src="https://cdn.deliciousmeetshealthy.com/wp-content/uploads/2017/04/Creamy-Mashed-Potatoes-4.jpg" alt=""/>
            <h2>Description:</h2>
            <p>{recipeOfTheDay.description}</p>
            <h2>Ingredients:</h2>
            {this.renderIngredients()}
            </div>
        )
    }
}

export default RecipeOfTheDay;