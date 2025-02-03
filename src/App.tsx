import "./App.css";
import Counter from "./components/Counter";
import RichTextEditor from "./components/TextEditor";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div>
      <Counter />
      <UserForm />
      <RichTextEditor />
    </div>
  );
}

export default App;
