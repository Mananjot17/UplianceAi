import "./App.css";
import Dashboard from "./Pages/Dashboard";
import { SignInButton, SignedIn, SignedOut } from "@clerk/react-router";

function App() {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Dashboard />
      </SignedIn>
    </div>
  );
}

export default App;
