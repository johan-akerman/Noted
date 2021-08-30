import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { Option } from "./Option";

export function DocSettings() {
  return (
    <div className="w-sm px-4">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button>
              <FontAwesomeIcon
                className={`
                ${open ? "opacity-60" : ""}
                mt-3 mr-3 text-white text-xl cursor-pointer`}
                icon={faCog}
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-96 max-w-sm px-4 mt-3 transform -translate-x-full left-1/2 sm:px-0 lg:max-w-3xl">
                <div className="mt-3 bg-white p-7 overflow-hidden rounded-lg shadow-xl border-2 border-gray-300">
                  <h1 className="text-2xl">Document settings</h1>
                  <div className="pt-3">
                    <Option title="Page name and icon" />
                    <Option title="Subtitle" />
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
