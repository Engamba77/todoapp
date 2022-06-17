import react from "react";

const Image = ({ newImage }) => {
  return (
    <>
      <div style={{ width: "130px", height: "130px" }}>
        <img style={{ width: "100%", height: "100%" }} src={newImage} />
      </div>
    </>
  );
};
export default Image;
