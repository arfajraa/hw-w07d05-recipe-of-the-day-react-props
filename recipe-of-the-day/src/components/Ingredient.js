import React from 'react';

const Ingredient = (props) => {
    const ingredient = props.ingredient;
    return (
        <div className="ingredient">
            <p>{ingredient.ingredient} - {ingredient.amount}</p>
        </div>
    )
}


export default Ingredient;