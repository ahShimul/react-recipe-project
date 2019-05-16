import React from "react";
import { Link } from "react-router-dom";

const Recipes = props => (
  <div className="container">
    <div className="row">
      {props.recipes.map(recipe => {
        return (
          <div
            className="col-md-4"
            key={recipe.recipe_id}
            style={{ marginBottom: "2rem" }}
          >
            <div className="recipes__box">
              <img
                className="recipe__box-img"
                src={recipe.image_url}
                alt={recipe.title}
              />
              <div className="recipe__text">
                <h5 className="recipes__title">
                  {recipe.title.length < 10
                    ? `${recipe.title}`
                    : `${recipe.title.substring(0, 15)}...`}
                </h5>
                <p className="recipes__subtitle">
                  Publisher:{" "}
                  <span>
                    {recipe.publisher.length < 5
                      ? `${recipe.publisher}`
                      : `${recipe.publisher.substring(0, 10)}...`}
                  </span>
                </p>
              </div>
              <button className="recipe_buttons">
                <Link
                  to={{
                    pathname: `/recipe/${recipe.recipe_id}`,
                    state: {
                      id: recipe.recipe_id
                    }
                  }}
                >
                  View Recipe
                </Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Recipes;
