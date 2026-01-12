import React from "react";
import { useEffect, useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAddOrUpdate = () => {
    if (!title.trim()) return;

    if (editId) {
      setTodos(
        todos.map((todo) => (todo.id === editId ? { ...todo, title } : todo))
      );
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), title }]);
    }

    setTitle("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (todo) => {
    setTitle(todo.title);
    setEditId(todo.id);
  };
  return (
    <div className="w-[380px] bg-white shadow-md rounded-lg p-5">
      <h1 className="text-xl font-bold text-center mb-4">Todo List</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter todo"
          className="border rounded px-3 py-2 flex-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={handleAddOrUpdate}
          className="bg-blue-500 text-white px-4 rounded"
        >
          {editId ? "Update" : "Add"}
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center border rounded px-3 py-2"
          >
            <span>{todo.title}</span>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(todo)}
                className="bg-yellow-400 px-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className="bg-red-500 text-white px-2 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="text-center text-gray-400 mt-4">No todos yet</p>
      )}
    </div>
  );
}

export default Todo;
