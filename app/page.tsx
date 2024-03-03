// app/page.tsx

import { revalidatePath } from "next/cache";

import { AuthGetCurrentUserServer, cookiesClient } from "@/utils/amplify-utils";

import Logout from "@/components/Logout";

async function App() {
  const user = await AuthGetCurrentUserServer();
  const { data: todos } = await cookiesClient.models.Todo.list();

  async function addTodo(data: FormData) {
    "use server";
    const title = data.get("title") as string;
    await cookiesClient.models.Todo.create({
      content: title,
      done: false,
      priority: "medium",
    });
    revalidatePath("/");
  }


return (
  <>
  <div className="flex justify-end">
    {user && <Logout />}

  </div>
  <div>
    {user && <h1 className="text-4xl font-bold text-center my-4">Hello {user.userId} </h1>}
    <form action={addTodo} className="flex flex-col items-center">
      <input type="text" name="title" className="border p-2 rounded my-2" />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded my-2 hover:bg-blue-700">Add Todo</button>
    </form>

    <ul className="list-disc pl-5">
      {todos && todos.map((todo) => <li key={todo.id} className="my-1">{todo.content}</li>)}
    </ul>
  </div>
  </>
);}

export default App;