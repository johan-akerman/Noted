import { useEffect, useState } from "react";
import { InputBox } from "./InputBox";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Image } from "./content/Image";
import { Text } from "./content/Text";

function generateElement(element) {
  switch (element.type) {
    case "text":
      return <Text text={element.text} />;
    case "image":
      return <Image imageUrl={element.imageUrl} caption={element.caption} />;
    default:
      return <h1>Other</h1>;
  }
}

export function Document({ elements, onAdd, title, editTitle }) {
  const [subTitle, setSubTitle] = useState("");
  const [characters, updateCharacters] = useState(elements);

  useEffect(() => {
    updateCharacters(elements);
  }, [elements]);

  function handleOnDragEnd(result) {
    if (!result.destination) return; // solves crash if dragged outside of dragdropcontext.
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateCharacters(items);
  }

  return (
    <div className="col-span-9">
      <div className="w-6/12 mx-auto my-32">
        <input
          type="text"
          className="text-5xl mb-5 w-full focus:outline-none focus:shadow-outline"
          value={title}
          placeholder="Untitled document"
          onChange={(e) => editTitle(e.target.value)}
        />

        <input
          type="text"
          className="text-2xl text-gray-500 mb-12 w-full focus:outline-none focus:shadow-outline"
          value={subTitle}
          placeholder="Subtitle about the document goes here"
          onChange={(e) => setSubTitle(e.target.value)}
        />

        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="grid gap-3"
              >
                {characters.map((element, index) => {
                  return (
                    <Draggable
                      key={element.id}
                      draggableId={element.id}
                      index={index}
                      className="focus:border-2 focus:border-black"
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {generateElement(element)}
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <InputBox onAdd={onAdd} />
      </div>
    </div>
  );
}
