import React from "react";

// import array of plant
import { plantList } from "../datas/plantList";

import PlantItem from "./PlantItem";

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
        {plantList.map(({ id, cover, name, water, light }) => (
          <PlantItem
            id={id}
            cover={cover}
            name={name}
            water={water}
            light={light}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
