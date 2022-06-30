import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Widgets() {
  return (
    <div className="mt-2 px-2">
      {/* SearchBox */}
      <div
        className="flex items-center space-x-2 bg-gray-200 rounded-full mt-2
		p-3"
      >
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          className="flex-1 outline-none bg-transparent"
          type="text"
          placeholder="Search Twitter"
        />
      </div>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="Johanna_Tandrew"
        options={{ height: 1000 }}
      />
    </div>
  );
}

export default Widgets;
