import React from "react";

// import array of plant
import { plantList } from "../datas/plantList";

// import style.css for the ShoppingList component
import "../styles/ShoppingList.css";

function ShoppingList() {
  // create an array of category from the plantList array
  const categories = plantList.reduce(
    (reducer, plant) =>
      reducer.includes(plant.category)
        ? reducer
        : reducer.concat(plant.category),
    []
  );

  //  return for integration in dom from map
  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map((plant) => (
          <li key={plant.id} className="lmj-plant-item">
            {plant.name}
            {plant.isSpecialOffer ? (
              <span className="lmj-Sales">Solde !🔥</span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
