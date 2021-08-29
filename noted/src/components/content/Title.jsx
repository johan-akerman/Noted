import { useState } from "react";

export function Title() {
  const [value, setValue] = useState("");
  return (
    <textarea
      className="text-6xl h-20 overflow-auto pb-3 appearance-none w-full focus:outline-none"
      id="inline-full-name"
      type="text"
      value={value}
      placeholder="Lecture title goes here"
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
