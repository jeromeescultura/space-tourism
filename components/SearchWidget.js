import { ChevronDownIcon } from "@heroicons/react/solid";

function SearchWidget() {
  return (
    <div className="bg-gray-900 p-5 md:px-8 grid grid-cols-2 md:grid-cols-7 gap-2 border-b border-slate-500 items-end grid-flow-row-dense">
      <div className="md:col-span-2">
        <label
          className=" w-full block barlow-condensed text-white text-xs md:text-sm uppercase font-bold mb-2"
          htmlFor="keywords"
        >
          Keywords
        </label>
        <input
          className=" w-full barlow-condensed appearance-none border rounded-sm py-2 px-3 text-white leading-tight bg-transparent focus:outline-none focus:shadow-outline"
          id="keywords"
          type="text"
          placeholder="eg Falcon"
        />
      </div>
      <div className="md:col-span-2">
        <label
          className=" w-full block barlow-condensed text-white text-xs md:text-sm uppercase font-bold mb-2"
          htmlFor="launchpad"
        >
          Launchpad
        </label>
        <input
          className=" w-full barlow-condensed appearance-none border rounded-sm py-2 px-3 text-white leading-tight bg-transparent focus:outline-none focus:shadow-outline"
          id="launchpad"
          type="text"
          placeholder="Any"
        />
      </div>
      <div>
        <label
          className=" w-full block barlow-condensed text-white text-xs md:text-sm uppercase font-bold mb-2"
          htmlFor="keywords"
        >
          Min Year
        </label>
        <input
          className=" w-full barlow-condensed appearance-none border rounded-sm py-2 px-3 text-white leading-tight bg-transparent focus:outline-none focus:shadow-outline"
          id="min-year"
          type="text"
          placeholder="Any"
        />
      </div>
      <div>
        <label
          className=" w-full block barlow-condensed text-white text-xs md:text-sm uppercase font-bold mb-2"
          htmlFor="min-year"
        >
          Max Year
        </label>
        <input
          className=" w-full barlow-condensed appearance-none border rounded-sm py-2 px-3 text-white leading-tight bg-transparent focus:outline-none focus:shadow-outline"
          id="Max Year"
          type="text"
          placeholder="Any"
        />
      </div>
      <div className="col-span-2 md:col-span-1 mt-4 md:mt-0">
        <button className="barlow-condensed bg-white p-2 text-center text-black bold w-full  rounded-sm hover:bg-gray-200 transition duration-200 ease-in-out ">
          Apply
        </button>
      </div>
    </div>
  );
}

export default SearchWidget;
