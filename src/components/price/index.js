import react from "react";

const Price = ({ newPrice }) => {
  return (
    <>
      <div style={{ color: "black" }}>
        <p>MRP:${newPrice}</p>
      </div>
    </>
  );
};
export default Price;
