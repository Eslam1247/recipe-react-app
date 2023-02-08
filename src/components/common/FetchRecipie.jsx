import React, { useState, useEffect } from "react";

import Loader from "./../Loader";
import Recipe from "../Recipe";
import "./FetchRecipe.css";

const FetchRecipe = () => {
  const [chicken, setChicken] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pastry, setPastry] = useState([]);
  const [pasta, setPasta] = useState([]);
  const [salad, setSalad] = useState([]);
  const [buger, setBuger] = useState([]);
  const APP_KEY = "29d587081cd94aba8413d56404bfcead";
  const APP_ID = "ef6df93e";
  //   const appApi = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const appApi = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const appApi1 = `https://api.edamam.com/search?q=pastry&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const appApi2 = `https://api.edamam.com/search?q=pasta&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const appApi3 = `https://api.edamam.com/search?q=salad&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const appApi4 = `https://api.edamam.com/search?q=burger bun&app_id=${APP_ID}&app_key=${APP_KEY}`;
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    setLoading(true);
    const response = await Promise.all([
      fetch(appApi),
      fetch(appApi1),
      fetch(appApi2),
      fetch(appApi3),
      fetch(appApi4),
    ]);
    const data1 = await response[0].json();
    const data2 = await response[1].json();
    const data3 = await response[2].json();
    const data4 = await response[3].json();
    const data5 = await response[4].json();
    setLoading(false);

    setChicken(data1.hits);
    setPastry(data2.hits);
    setPasta(data3.hits);
    setSalad(data4.hits);
    setBuger(data5.hits);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="allRecipe">
          <div className="all-item-wrapper">
            <span>BUGER</span>
            <div className="items">
              {buger.map((recip, index) => (
                <Recipe
                  key={index}
                  label={recip.recipe.label}
                  image={recip.recipe.image}
                />
              ))}
            </div>
          </div>
          <div className="all-item-wrapper">
            <span>Chicken</span>
            <div className="items">
              {chicken.map((recip, index) => (
                <Recipe
                  key={index}
                  label={recip.recipe.label}
                  image={recip.recipe.image}
                />
              ))}
            </div>
          </div>
          <div className="all-item-wrapper">
            <span>PASTRY</span>
            <div className="items">
              {pastry.map((recip, index) => (
                <Recipe
                  key={index}
                  label={recip.recipe.label}
                  image={recip.recipe.image}
                />
              ))}
            </div>
          </div>
          <div className="all-item-wrapper">
            <span>PASTA</span>
            <div className="items">
              {pasta.map((recip, index) => (
                <Recipe
                  key={index}
                  label={recip.recipe.label}
                  image={recip.recipe.image}
                />
              ))}
            </div>
          </div>
          <div className="all-item-wrapper">
            <span>SALAD</span>
            <div className="items">
              {salad.map((recip, index) => (
                <Recipe
                  key={index}
                  label={recip.recipe.label}
                  image={recip.recipe.image}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FetchRecipe;
