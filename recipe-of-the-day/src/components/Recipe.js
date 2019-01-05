import React from 'react';

const Recipe = (props) => {
    const recipe = props.recipe;
    return (
        <div className="recipe">
            <p> Name: {recipe.name}</p>
            <p> Serves: {recipe.servings}</p>
            <p> Category: {recipe.category}</p>
        </div>
    )
}


export default Recipe;