import { useState } from "react";
import { animated, useSpring } from "react-spring";
import { Button, Box } from "@mui/material";

const Counter = () => {
  const [count, setCount] = useState(0);

  const backgroundAnimation = useSpring({
    backgroundColor: `rgba(0, 150, 255, ${count / 100})`,
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div style={{ ...backgroundAnimation }}>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <h2>Counter: {count}</h2>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </Button>
        <Button variant="contained" color="error" onClick={() => setCount(0)}>
          Reset
        </Button>
      </Box>
    </animated.div>
  );
};

export default Counter;
