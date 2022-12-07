import React, { useState } from "react";

const Categories = ({ categories, filterItems, items }) => {
  const [active, setActive] = useState("all");

  const menuI = items.map((item) => item);
  console.log(menuI);

  const clickHandle = (category) => {
    filterItems(category);
    setActive(category);
  };

  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className={`filter-btn ${active == category && 'active'}`}
            key={index}
            onClick={() => clickHandle(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
