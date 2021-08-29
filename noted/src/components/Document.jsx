import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Image } from "./content/Image";
import { Text } from "./content/Text";

const elements = [
  {
    id: "1",
    type: "text",
    text: "Text goes here",
  },
  {
    id: "2",
    type: "image",
    imageUrl:
      "https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=",
    caption: "Caption goes here",
  },
  {
    id: "3",
    type: "image",
    imageUrl:
      "https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=",
    caption: "Caption goes here",
  },
];

function generateElement(element) {
  switch (element.type) {
    case "text":
      return <Text text={element.text} />;
    case "image":
      return <Image imageUrl={element.imageUrl} caption={element.caption} />;
    default:
      return;
  }
}

export function Document() {
  const [characters, updateCharacters] = useState(elements);

  function handleOnDragEnd(result) {
    if (!result.destination) return; // solves crash if dragged outside of dragdropcontext.
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateCharacters(items);
  }

  return (
    <div className="col-span-7">
      <div className="w-6/12 mx-auto mt-32">
        <h1 className="text-5xl mb-5">Intro to HTML</h1>
        <p className="text-2xl text-gray-500 mb-12">
          Notes from first lecture of programming course.{" "}
        </p>

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
      </div>
    </div>
  );
}
