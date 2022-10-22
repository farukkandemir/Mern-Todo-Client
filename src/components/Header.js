import React from "react";
import {Link} from "react-router-dom";

function Header() {
  return (
    <header className="d-flex bg-light p-4">
      <h2 className="mr-auto">Mern-Stack Todo App </h2>
      <div className="">
        <Link to="/">
          <button className="btn btn-primary mr-4">Todos</button>
        </Link>

        <Link to="/new">
          <button className="btn btn-secondary">Create Todo</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
