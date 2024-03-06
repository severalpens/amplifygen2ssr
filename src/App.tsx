import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import TodoList from "./components/TodoList";


function App() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Hello, Amplify 👋</h1>
      <TodoList />
    </>
  );
}

export default withAuthenticator(App);