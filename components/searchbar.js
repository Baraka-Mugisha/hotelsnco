import { Icon } from "@iconify/react";

export default function SearchBar() {
  return (
    <div className="flex divide-x rounded-full border-inherit shadow-lg border border-slate-200 py-2 w-fit">
      <button className="font-semibold text-neutral-700 px-4">Anywhere</button>
      <button className="font-semibold text-neutral-700 px-4">Any week</button>
      <div className="flex items-center gap-x-2 px-2 pl-4">
        <button className="text-gray-400">Add guests</button>
        <div className="flex items-center p-2 bg-rose-500 cursor-pointer rounded-full">
          <Icon
            icon="fluent:search-12-filled"
            width="15"
            height="15"
            color="white"
          />
        </div>
      </div>
    </div>
  );
}
