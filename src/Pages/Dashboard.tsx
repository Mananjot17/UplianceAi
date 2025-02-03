import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Counter from "../components/Counter";
import RichTextEditor from "../components/TextEditor";
import UserForm from "../components/UserForm";

const Dashboard = () => {
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 200, friction: 20 },
  });

  useEffect(() => {
    // Fetch data from localStorage initially
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  return (
    <animated.div
      style={fadeIn}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6"
    >
      <animated.div className="p-6 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center">
        <Counter />
      </animated.div>
      <animated.div className="p-6 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center">
        <RichTextEditor userData={userData} />
      </animated.div>
      <animated.div className="p-6 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center">
        <UserForm userData={userData} setUserData={setUserData} />
      </animated.div>
    </animated.div>
  );
};

export default Dashboard;
