import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFont, faImage } from "@fortawesome/free-solid-svg-icons";

const objects = [
  {
    icon: faFont,
    text: "Text",
  },
  {
    icon: faImage,
    text: "Image",
  },
];

export function Sidebar() {
  return (
    <div className="col-span-2 border-r-2 border-gray-200 h-screen px-3 py-8">
      <h1 className="text-3xl pl-3 ">Add content</h1>
      <p className="pl-3 pb-3 text-md text-gray-400">
        Drag and drop to add to your note.
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
