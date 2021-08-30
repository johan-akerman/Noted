import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Document } from "./components/Document";

function App() {
  const [title, setTitle] = useState("");
  const [elements, setElements] = useState([
    {
      id: 1,
      type: "text",
      text: "Text goes here",
    },
    {
      id: 2,
      type: "text",
      text: "Text goes here",
    },

    {
      id: 3,
      type: "image",
      imageUrl:
        "https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=",
      caption: "Caption goes here",
    },
  ]);

  function addElement(element) {
    const id = elements.length;
    const newElement = { id, ...element };
    setElements([...elements, newElement]);
  }

  function changeTitle(title) {
    setTitle(title);
  }

  return (
    <div>
      <Navbar title={title} editTitle={changeTitle} />
      <div className="relative grid grid-cols-9 z-10">
        <Document
          title={title}
          editTitle={changeTitle}
          elements={elements}
          onAdd={addElement}
        />
      </div>
    </div>
  );
}

export default App;
