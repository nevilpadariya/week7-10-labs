import { useState } from "react";

export default function TodoList() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = () => {
    const t = input.trim();
    if (!t) return;
    setTodos([...todos, t]);
    setInput("");
  };

  const remove = (idx: number) => setTodos(todos.filter((_, i) => i !== idx));

  return (
    <div style={{ display: "grid", gap: 8, maxWidth: 420 }}>
      <div style={{ display: "flex", gap: 8 }}>
        <input
          aria-label="New todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((t, i) => (
          <li key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span>{t}</span>
            <button onClick={() => remove(i)} aria-label={`Remove ${t}`}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
