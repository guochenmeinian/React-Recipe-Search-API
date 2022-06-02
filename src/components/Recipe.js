import React from 'react'
import './Recipe.css'

const Recipe = ({recipe}) => {
    const {label, calories, image, url, ingredients} = recipe.recipe;
    return (
    <div className='recipe'>
        <h2>{label}</h2>
        <img src={image} alt={label}/>
        <ul> {/*ingredientLines is an array, we iterate throught it here using map method*/}
            {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
        </ul>
        <p>Calories: {Math.floor(calories)}g</p>
        <a href={url} target='_blank' rel='noopener noreferrer'>Link to the recipe</a>
    </div>
  )
}

export default Recipe