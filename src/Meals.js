import React from "react";
import "./Meals.css";

const Meals = ({ meal }) => {
  return (
    <div className="meal-card">
      <h2>{meal.strMeal}</h2>
      <p>Origin : {meal.strArea}</p>
      <img src={meal.strMealThumb} alt={"photo de " + meal.strMeal} />
      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default Meals;
