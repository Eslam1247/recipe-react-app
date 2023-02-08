import React from "react";
// import Ingredient from "./../components/Ingredients";
const Recipe = ({ label, image, ingredient }) => {
  const mystyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
    backgroundColor: "whileSmoke",
    width: "100%",
    borderRadius: "5px",
    boxShadow: "2px 2px 2px gray ,-2px -2px 2px  gray",
    listStyleType: "none",
    textAlign: "center",
  };
  return (
    <div className="recipe" style={mystyle}>
      <img
        src={image}
        alt=""
        style={{
          width: "200px",
          height: "150px",
          padding: "20px",
          borderRadius: "5px",
        }}
      />
      <span style={{ fontSize: "20px", padding: "5px" }}>
        <i>{label}</i>
      </span>
    </div>
  );
};

export default Recipe;
