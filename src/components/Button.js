import React, { useState } from "react";
import styled from "styled-components";

export const Button = () => {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("red")

  const addCount = () => {
    setCount(count + 1)

    if(count === 10) setColor("blue")
  }


  return (
    <CustomButton onClick={addCount}>
      <p style={{ color: color }}> Click me +1 </p>
    </CustomButton>
  );
}

const CustomButton = styled("button")`
  background-color: green;
  font-size: 21;
  padding: 16px;
`