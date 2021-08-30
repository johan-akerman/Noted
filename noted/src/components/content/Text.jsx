import { useState } from "react";

export function Text({ text }) {
  const [value, setValue] = useState(text);
  if (value.length > 0) {
    return (
      <input
        type="text"
        className="text-2xl pb-3 w-full focus:outline-none  focus:shadow-outline"
        value={value}
        placeholder="Write something or type / for more"
        onChange={(e) => setValue(e.target.value)}
      />
    );
  } else return null;
}
