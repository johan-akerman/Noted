import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const objects = [
  {
    icon: faCoffee,
    text: "Text",
  },
  {
    icon: faCoffee,
    text: "Image",
  },
  {
    icon: faCoffee,
    text: "Video",
  },

  {
    icon: faCoffee,
    text: "Quote",
  },

  {
    icon: faCoffee,
    text: "Test",
  },
];

export function Sidebar() {
  return (
    <div className="col-span-2 border-r-2 border-gray-200 h-screen px-3 py-8">
      <h1 className="text-3xl pl-3 ">Add content</h1>
      <p className="pl-3 pb-3 text-md text-gray-400">
        Drag and drop to add to your doc.
      </p>

      {objects.map((object) => {
        return (
          <div className="flex justify-start items-center p-3 hover:border-2  hover:shadow-lg  cursor-pointer">
            <FontAwesomeIcon className="text-md mr-3" icon={object.icon} />
            <h1>{object.text}</h1>
          </div>
        );
      })}
    </div>
  );
}
