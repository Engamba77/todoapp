import react from "react";

const Category = ({ newCategory }) => {
  return (
    <>
      <div style={{ fontSize: "20px", color: "blue" }}>
        <p>Category: {newCategory}</p>
      </div>
    </>
  );
};
export default Category;
