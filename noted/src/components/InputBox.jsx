import { useState } from "react";

export function InputBox({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ type: "text", text });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="text-xl py-2 text-gray-700 w-full focus:outline-none focus:shadow-outline"
        value={text}
        placeholder="Write something or type / for more"
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}
