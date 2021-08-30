import { DocSettings } from "./DocSettings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaste,
  faCog,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export function Navbar({ editTitle, title }) {
  return (
    <div className="bg-blue-500 py-4 w-full flex items-center sticky top-0 z-50">
      <div className="px-7 w-full mx-auto flex justify-between">
        <div>
          <FontAwesomeIcon
            className="mr-4 text-white text-xl cursor-pointer"
            icon={faChevronLeft}
          />
          <input
            type="text"
            className="text-2xl text-white pt-1 bg-transparent w-96 focus:outline-none focus:shadow-outline placeholder-white"
            value={title}
            placeholder="Untitled document"
            onChange={(e) => editTitle(e.target.value)}
          />
        </div>

        <div className="flex">
          <DocSettings />
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
