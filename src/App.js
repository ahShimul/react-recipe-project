import React, { Component } from "react";
import "./App.css";
import Form from "./components/form.jsx";
import Recipes from "./components/recipes.js";

const API_KEY = "49caefd841eea1e2a438de80ddd96b03";

class App extends Component {
  state = {
    recipes: []
  };
  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&page=2`
    );

    const recipe_result = await api_call.json();
    this.setState({ recipes: recipe_result.recipes });
    console.log(this.state.recipes);
  };

  componentDidMount = () => {
    const lStorage = localStorage.getItem("recipes");
    const recipes = JSON.parse(lStorage);
    this.setState({ recipes });
  };
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Application</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
