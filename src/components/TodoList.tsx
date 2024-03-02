import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";

export default function TodoList() {
  // generate your data client using the Schema from your backend
  const client = generateClient<Schema>();

  useEffect(() => {
    listTodos()
    const sub = client.models.Todo.observeQuery().subscribe(({ items }) =>
     setTodos([...items])
    );
  
    return () => sub.unsubscribe();
  }, []);

  const [todos, setTodos] = useState<Schema["Todo"][]>([]);

  async function listTodos() {
    // fetch all todos
    const { data } = await client.models.Todo.list();
    setTodos(data);
  }

  useEffect(() => {
    listTodos();
  }, []);

// ...
return (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Todos</h1>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={async () => {
    // create a new Todo with the following attributes
    const { errors, data: newTodo } = await client.models.Todo.create({
      // prompt the user to enter the title
      content: window.prompt("title"),
      done: false,
      priority: 'medium'
    })
    console.log(errors, newTodo);
    }}>Create</button>

    <ul className="mt-4">
    {todos.map((todo) => (
      <li key={todo.id} className="mb-2">{todo.content}</li>
    ))}
    </ul>
  </div>
  );
}