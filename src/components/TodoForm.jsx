import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title);
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input type="text" onChange={(event) => setTitle(event.target.value)} />
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default TodoForm;