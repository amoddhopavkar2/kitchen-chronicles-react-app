import React from "react";
import RandomRecipes from "../caraousel-recipe";
import RandomCocktails from "../caraousel-cocktail";

const Home = () => {
  return (
    <div>
      <div className={"container"}>
        <h3>Recommended Recipes</h3>
        <RandomRecipes />
        {/*<h3>Recommended Cocktails</h3>*/}
        {/*<RandomCocktails/>*/}
      </div>

      <p>{}</p>
    </div>
  );
};

export default Home;
