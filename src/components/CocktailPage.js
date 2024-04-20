import React, { useState, useEffect } from "react";

const Api = () => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false); // Initially not loading
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Only fetch data if searchTerm is not empty
    if (searchTerm === "") {
      setLoading(false);
      return;
    }

    setLoading(true);
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${
        searchTerm}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCocktails(data.drinks || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Trigger the useEffect by changing searchTerm state
    setSearchTerm(e.target.elements.search.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          name="search"
          type="text"
          placeholder="Enter cocktail name"
          onChange={handleInputChange}
          value={searchTerm}
        />
      </form>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : cocktails.length > 0 ? (
        cocktails.map((drink, index) => (
          <div key={index} className="box">
            <h1>
              {drink.strDrink}
              <span>({drink.strAlcoholic})</span>
            </h1>

            <h3>Ingredients:</h3>
            <ul>
              <li>{drink.strIngredient1}</li>
              <li>{drink.strIngredient2}</li>
              <li>{drink.strIngredient3}</li>
              <li>{drink.strIngredient4}</li>
            </ul>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />

            <h3>{drink.strGlass}</h3>
            <h3>Instructions:</h3>
            <p>{drink.strInstructions}</p>
          </div>
        ))
      ) : (
        <p>No cocktails found</p>
      )}
    </div>
  );
};

export default Api;
