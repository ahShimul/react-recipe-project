import React, { Component } from "react";
import { Link } from "react-router-dom";
import Details from "./detailsHeader";

const API_KEY = "49caefd841eea1e2a438de80ddd96b03";

class Recipe extends Component {
  state = {
    activeRecipe: []
  };

  componentDidMount = async () => {
    const id = this.props.location.state.id;
    console.log(id);
    const req = await fetch(
      `https://www.food2fork.com/api/get?key=${API_KEY}&rId=${id}`
    );

    const res = await req.json();
    this.setState({ activeRecipe: res.recipe });
  };
  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div>
        <Details getName={this.state.activeRecipe} />
        <div className="container">
          {this.state.activeRecipe.length !== 0 && (
            <div className="active-recipe">
              <img
                className="active__image"
                src={recipe.image_url}
                alt={recipe.title}
              />

              <h3 className="active-recipe__title">{recipe.title}</h3>
              <h4 className="active-recipe__publisher">
                Publisher:
                <span>{recipe.publisher}</span>
              </h4>

              <p className="active-recipe__website">
                Website:
                <span>
                  <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
                </span>
              </p>
              <button className="active-recipe__button">
                <Link to="/">Go Home</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Recipe;
