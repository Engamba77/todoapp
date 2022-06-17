import React, { useState } from "react";
import styled from "styled-components";
import { NewButton } from "./styled";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const Counter = () => {
  // react state
  // count => variable (data storage)
  // setCount => function
  // useState => hooks (inbulit react function), that will help us manage the state
  // here 0 is a default value for count
  const [count, setCount] = useState(0);
  const [minimum, setMinimum] = useState(false);

  const onIncrease = () => {
    if (count >= 0) {
      setMinimum(false);
    }
    setCount((prev) => prev + 1);
    console.log("Increased");
  };

  const onDecrease = () => {
    setCount((prev) => prev - 1);
    console.log("Decreased");
    if (count <= 0) {
      setMinimum(true);
      setCount(0);
    }
  };

  const onReset = () => {
    setCount(0);
    console.log("Reset to 0");
    if (count === 0) {
      setMinimum(false);
    }
  };

  console.log("count", count);

  return (
    <>
      <Container>
        <div
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <img
            src="/static/images/mountain.jpg"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div
          style={{
            // border: '1px solid blue',
            width: "400px",
            position: "absolute",
            left: "700px",
            top: "300px",
          }}
        >
          <h1
            style={{
              color: "green",
              // paddingBottom: "30px",
              paddingLeft: "40px",
            }}
          >
            Simple Counter
          </h1>
          <p
            style={{
              color: "green",
              fontSize: "40px",
              // paddingBottom: "20px",
              position: "relative",
              paddingLeft: "140px",
            }}
          >
            {count}
          </p>

          {minimum ? "Minimum Value is 0" : ""}

          <div>
            <NewButton type="Submit" value="Submit" onClick={onDecrease}>
              Decrease
            </NewButton>
            <NewButton type="Submit" value="Submit" onClick={onReset}>
              Reset
            </NewButton>
            <NewButton type="Submit" value="Submit" onClick={onIncrease}>
              Increase
            </NewButton>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Counter;
