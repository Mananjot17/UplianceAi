import { animated } from "react-spring";
import { Button, Box } from "@mui/material";

// Define the types for the props
interface CounterProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Counter: React.FC<CounterProps> = ({ count, setCount }) => {
  return (
    <animated.div>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        gap={6}
        className="text-center"
      >
        <h2 className="text-xl sm:text-2xl font-semibold">Counter: {count}</h2>

        <div className="flex gap-6 flex-wrap justify-center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCount(count + 1)}
            className="px-8 py-3 text-sm sm:text-base"
          >
            +
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => setCount(0)}
            className="px-8 py-3 text-sm sm:text-base"
          >
            Reset
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setCount(count - 1)}
            className="px-8 py-3 text-sm sm:text-base"
          >
            -
          </Button>
        </div>
      </Box>
    </animated.div>
  );
};

export default Counter;
