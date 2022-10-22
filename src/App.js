import Header from "./components/Header";
import {Routes, Route} from "react-router-dom";
import TodoList from "./pages/TodoList";
import CreateTodo from "./pages/CreateTodo";
import EditTodo from "./pages/EditTodo";

function App() {
  return (
    <div className="container p-4">
      <Header />

      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/new" element={<CreateTodo />} />
        <Route path="/edit/:id" element={<EditTodo />} />
      </Routes>
    </div>
  );
}

export default App;
