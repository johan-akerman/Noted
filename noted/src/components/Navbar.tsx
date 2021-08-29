import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPaste, faCog } from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  return (
    <div className="bg-blue-500 py-4 w-full flex items-center sticky top-0 z-50">
      <div className="px-7 w-full mx-auto flex justify-between">
        <h1 className="text-white text-2xl pt-1">Note name goes here</h1>
        <div>
          <FontAwesomeIcon
            className="mr-6 text-white text-xl cursor-pointer"
            icon={faEye}
          />
          <FontAwesomeIcon
            className="mr-6 text-white text-xl cursor-pointer"
            icon={faCog}
          />
          <button className="px-5 py-2 bg-white text-blue-500 rounded font-bold">
            <FontAwesomeIcon
              className="mr-2 text-lg cursor-pointer"
              icon={faPaste}
            />{" "}
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
