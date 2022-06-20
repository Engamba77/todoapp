import React, { useState } from "react";
import styled from "styled-components";
import { NewButton } from "./styled";
import { Container } from "./styled";
import { Head } from "./styled";
import { Mount } from "./styled";
import { Zero } from "./styled";
import { Box } from "./styled";

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
        <Mount>
          <img
            alt="mountain"
            src="/images/mountain.jpg"
            style={{ width: "100%", height: "100%" }}
          />
        </Mount>
        <Box>
          <Head>Simple Counter</Head>
          <Zero>{count}</Zero>
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
        </Box>
      </Container>
    </>
  );
};

export default Counter;
