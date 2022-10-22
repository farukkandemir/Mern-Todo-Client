import React, {useRef} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function CreateTodo() {
  const descRef = useRef();
  const prioRef = useRef();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4000/api/todos", {
        desc: descRef.current.value,
        priority: prioRef.current.value,
      });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="p-4">
      <h5>Create a New Todo</h5>
      <form action="/api/todos" className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            name="desc"
            id="desc"
            className="form-control"
            ref={descRef}
          />
        </div>
        <div>
          <label htmlFor="priority">Priority</label>
          <input
            type="text"
            name="priority"
            id="priority"
            className="form-control"
            ref={prioRef}
          />
        </div>

        {/* <input type="submit" value="Submit" className="btn btn-success mt-4" /> */}
        <button type="submit" className="btn btn-success mt-4">
          Create Todo
        </button>
      </form>
    </section>
  );
}

export default CreateTodo;
