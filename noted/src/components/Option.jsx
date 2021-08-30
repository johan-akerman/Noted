import { Switch } from "@headlessui/react";
import { useState } from "react";

export function Option({ title }) {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="py-1 flex justify-between">
      {title}
      <div className="flex">
        <h1 className="mr-3">{enabled ? "On" : "Off"}</h1>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? "bg-blue-500" : "bg-gray-300"}
relative inline-flex mt-0.5 flex-shrink-0 h-5 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span
            aria-hidden="true"
            className={`${enabled ? "translate-x-7" : "translate-x-0"}
pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
          />
        </Switch>
      </div>
    </div>
  );
}
