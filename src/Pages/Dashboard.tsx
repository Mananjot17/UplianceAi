// import { useState, useEffect } from "react";
// import { useSpring, animated } from "react-spring";
// import Counter from "../components/Counter";
// import RichTextEditor from "../components/TextEditor";
// import UserForm from "../components/UserForm";
// import { UserButton } from "@clerk/clerk-react";

// // Define the UserData type (with id)
// interface UserData {
//   id: string;
//   name: string;
//   email: string;
//   phone: string;
//   address: string;
// }

// const Dashboard: React.FC = () => {
//   const [userData, setUserData] = useState<UserData>({
//     id: "", // Make sure this is included
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//   });

//   // Animation for fade-in effect
//   const fadeIn = useSpring({
//     opacity: 1,
//     from: { opacity: 0 },
//     config: { tension: 200, friction: 20 },
//   });

//   const [count, setCount] = useState<number>(0);

//   // Animation for background color change
//   const backgroundAnimation = useSpring({
//     backgroundColor: `rgba(0, 150, 255, ${count / 100})`,
//     config: { tension: 200, friction: 25 },
//   });

//   // Fetch user data from localStorage on mount
//   useEffect(() => {
//     const storedData = localStorage.getItem("userData");
//     if (storedData) {
//       setUserData(JSON.parse(storedData));
//     }
//   }, []);

//   return (
//     <div className="p-6 bg-gray-200">
//       <div className="flex items-center justify-between mb-8 p-3 rounded-lg">
//         <h2 className="text-3xl font-medium">Dashboard</h2>
//         <UserButton />
//       </div>

//       <animated.div
//         style={fadeIn}
//         className="grid grid-cols-1 md:grid-cols-2 gap-6"
//       >
//         <animated.div
//           className="p-6 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center"
//           style={{ ...backgroundAnimation }}
//         >
//           <Counter count={count} setCount={setCount} />
//         </animated.div>
//         <animated.div
//           className="p-6 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center"
//           style={{ ...backgroundAnimation }}
//         >
//           <RichTextEditor userData={userData} />
//         </animated.div>
//         <animated.div
//           className="p-6 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center"
//           style={{ ...backgroundAnimation }}
//         >
//           <UserForm userData={userData} setUserData={setUserData} />
//         </animated.div>

//         <animated.div
//           className="p-6 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center"
//           style={{ ...backgroundAnimation }}
//         >
//           <UserForm userData={userData} setUserData={setUserData} />
//         </animated.div>
//       </animated.div>
//     </div>
//   );
// };

// export default Dashboard;

import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Counter from "../components/Counter";
import RichTextEditor from "../components/TextEditor";
import UserForm from "../components/UserForm";
import { UserButton } from "@clerk/clerk-react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Define the UserData type (with id)
interface UserData {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

const Dashboard: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    id: "", // Make sure this is included
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [count, setCount] = useState<number>(0);

  // Animation for fade-in effect
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 200, friction: 20 },
  });

  // Animation for background color change
  const backgroundAnimation = useSpring({
    backgroundColor: `rgba(0, 150, 255, ${count / 100})`,
    config: { tension: 200, friction: 25 },
  });

  // Fetch user data from localStorage on mount
  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  // Data for the user profile trends chart (e.g., counter over time)
  const chartData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "User Activity (Counter)",
        data: [count, count + 2, count + 4, count + 5], // Example of trend data (could be based on time or activity)
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-200">
      <div className="flex items-center justify-between mb-8 p-3 rounded-lg">
        <h2 className="text-3xl font-medium">Dashboard</h2>
        <UserButton />
      </div>

      <animated.div
        style={fadeIn}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Counter Visualization */}
        <animated.div
          className="p-6 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center"
          style={{ ...backgroundAnimation }}
        >
          <Counter count={count} setCount={setCount} />
        </animated.div>

        {/* Rich Text Editor */}
        <animated.div
          className="p-6 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center"
          style={{ ...backgroundAnimation }}
        >
          <RichTextEditor userData={userData} />
        </animated.div>

        {/* User Profile Form */}
        <animated.div
          className="p-6 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center"
          style={{ ...backgroundAnimation }}
        >
          <UserForm userData={userData} setUserData={setUserData} />
        </animated.div>

        {/* User Profile Trend Chart */}
        <animated.div
          className="p-6 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center"
          style={{ ...backgroundAnimation }}
        >
          <Bar data={chartData} options={{ responsive: true }} />
        </animated.div>
      </animated.div>
    </div>
  );
};

export default Dashboard;
