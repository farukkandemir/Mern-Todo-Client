import React, {useState, useEffect} from "react";
import {FaRegEdit} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md";
import {Link, useNavigate} from "react-router-dom";
import moment from "moment";
import axios from "axios";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllTodo();
  }, []);

  async function getAllTodo() {
    await axios
      .get("http://localhost:4000/api/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }

  async function handleDelete(id) {
    await axios.delete(`http://localhost:4000/api/todos/${id}`);

    navigate(0);
  }

  return (
    <main className="p-4">
      <h4 className="">Todo List</h4>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Description</th>
            <th>Priority</th>
            <th>Created at</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos &&
            todos.map((todo, index) => (
              <tr key={index}>
                <td>{todo.description}</td>
                <td>{todo.priority}</td>
                <td>{moment(todo.createdAt).format("MMM Do YYYY, h:mm:ss a")}</td>
                <td>
                  <Link to={`/edit/${todo._id}`}>
                    <FaRegEdit size="1.5rem" className="mr-2" color="blue" />
                  </Link>

                  <MdDeleteForever
                    size="1.6rem"
                    color="red"
                    onClick={() => handleDelete(todo._id)}
                    cursor="pointer"
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
}

export default TodoList;
