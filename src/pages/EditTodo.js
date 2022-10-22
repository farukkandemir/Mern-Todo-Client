import axios from "axios";
import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

function EditTodo() {
  const {id} = useParams();
  const navigate = useNavigate();

  const [desc, setDesc] = useState("");
  const [prio, setPrio] = useState("");

  async function handleUpdate(e) {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:4000/api/todos/${id}`, {desc, priority: prio});
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="p-4">
      <h5>Update Todo</h5>
      <form action="" className="mt-4" onSubmit={handleUpdate}>
        <div className="mb-3">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            name="desc"
            className="form-control"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="priority">Priority</label>
          <input
            type="text"
            name="priority"
            className="form-control"
            value={prio}
            onChange={(e) => setPrio(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-success mt-4">
          Update Todo
        </button>
      </form>
    </section>
  );
}

export default EditTodo;
