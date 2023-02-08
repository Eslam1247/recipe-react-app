import "./Recipe2.css";

const CateGorieItems = ({ image, label, ingredient }) => {
  return (
    <div className="recipe">
      <span style={{ fontSize: "20px", padding: "5px", fontWeight: "bold" }}>
        <i>{label}</i>
      </span>
      <div className="items">
        <span>
          <img src={image} alt="img" />
        </span>

        <ul style={{ listStyleType: "none" }}>
          <span
            style={{
              fontSize: "22px",
              fontFamily: "cursive",
              textDecoration: "underline",
            }}
          >
            ingredients
          </span>
          {ingredient.map((item, index) => (
            <li key={index}>{item.food}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CateGorieItems;
