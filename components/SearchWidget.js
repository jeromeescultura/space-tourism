import { Fragment, useState, useEffect, useRef } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import dateFormatter from "./DateFormatter";

function SearchWidget({ dateList, launchpadsList, handleSearch }) {
  const [keyword, setKeyword] = useState("");
  const [pad, setPad] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const focusDiv = useRef();
  const [filters, setFilters] = useState({
    keyword: "",
    pad: "",
    from: "",
    to: "",
  });

  useEffect(() => {
    if (focusDiv.current) focusDiv.current.focus();
  }, []);

  const handleInput = (field) => (event) => {
    const { value } = event.target;
    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "keyword":
        setKeyword(value);
        break;
      case "pad":
        setPad(value);
        break;
      case "from":
        setFrom(value);
        break;
      case "to":
        setTo(value);
        break;
      default:
        break;
    }
  };

  const handleButton = () => {
    handleSearch(filters);
    if (focusDiv.current) focusDiv.current.focus();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(filters);
    }
  };

  // const getLaunchPad = (value) => {
  //   LaunchPad(value);
  // };
  // const getMaxYear = (value) => {
  //   maxYear(value);
  // };
  // const getMinYear = (value) => {
  //   minYear(value);
  // };
  return (
    <div className="bg-gray-900 p-5 md:px-8 grid grid-cols-2 md:grid-cols-7 gap-2 border-b border-slate-500 items-end grid-flow-row-dense">
      {/* Search  Keyword */}
      <div className="md:col-span-2">
        <label
          className=" text-white w-full block barlow-condensed text-kwhite text-xs md:text-sm uppercase font-bold mb-2"
          htmlFor="keywords"
        >
          Keywords
        </label>
        <input
          className=" w-full barlow-condensed appearance-none border rounded-sm py-2 px-3 text-white leading-tight bg-transparent "
          id="keywords"
          type="text"
          placeholder="eg Falcon"
          value={filters.keyword}
          onChange={handleInput("keyword")}
          onKeyPress={handleKeyPress}
          autoFocus
          ref={focusDiv}
        />
      </div>
      <div className="md:col-span-2">
        <label
          htmlFor="pad"
          className="barlow-condensed text-white text-xs md:text-sm uppercase font-bold mb-2 "
        >
          Launch Pad
        </label>
        <select
          id="pad"
          onChange={handleInput("pad")}
          className="w-full barlow-condensed appearance-none border rounded-sm py-3 md:py-2 text-white leading-tight bg-transparent border-gray-300 hover:border-white cursor-pointer text-xs md:text-sm"
          onKeyPress={handleKeyPress}
        >
          <option value="" className="px-4 py-2 text-sm text-slate-700">
            Any
          </option>
          {launchpadsList.map((pads) =>
            pads.map((pad) => (
              <option
                value={pad.id}
                className="px-4 py-2 text-sm  text-slate-700"
              >
                {pad.full_name}
              </option>
            ))
          )}
        </select>
      </div>
      <div>
        <label
          htmlFor="maxYear"
          className="barlow-condensed text-white text-xs md:text-sm uppercase font-bold mb-2 "
        >
          Max Year
        </label>
        <select
          id="maxYear"
          onChange={handleInput("to")}
          className="w-full barlow-condensed appearance-none border rounded-sm py-2 px-3 text-white leading-tight bg-transparent border-gray-300 hover:border-white cursor-pointer"
        >
          <option
            className="px-4 py-2 text-sm text-slate-700"
            value=""
            selected
          >
            Any
          </option>
          {dateList.map((year) => (
            <option
              className="px-4 py-2 text-sm text-slate-700"
              value={parseInt(year)}
            >
              {year}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="minYear"
          className="barlow-condensed text-white text-xs md:text-sm uppercase font-bold mb-2 "
        >
          Min Year
        </label>
        <select
          id="minYear"
          onChange={handleInput("from")}
          className="w-full barlow-condensed appearance-none border rounded-sm py-2 px-3 text-white leading-tight bg-transparent border-gray-300 hover:border-white cursor-pointer"
        >
          <option
            className="px-4 py-2 text-sm text-slate-700"
            value=""
            selected
            className="cursor-pointer"
          >
            Any
          </option>
          {dateList.map((year) => (
            <option
              className="px-4 py-2 text-sm text-slate-700"
              value={parseInt(year)}
              className="cursor-pointer"
            >
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* <div className="">
        <p className="barlow-condensed text-white text-xs md:text-sm uppercase font-bold mb-2 ">
          Max Year
        </p>
        <Menu as="div" className="relative w-full inline-block text-left">
          <div>
            <Menu.Button
              className="inline-flex justify-between w-full barlow-condensed appearance-none border rounded-sm py-2 px-3 text-white leading-tight bg-transparent border-gray-300 hover:border-white text-xs"
              id="launchpad"
            >
              Any
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              as="section"
              className="origin-top-right absolute right-0 mt-2 w-full rounded-sm shadow-lg bg-slate-700 ring-1 ring-black ring-opacity-5 z-50"
            >
              <div className="py-1">
                <Menu.Item tabIndex="-1">
                  {({ active }) => (
                    <div
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-white"
                      }  px-4 py-2 text-sm cursor-pointer w-full`}
                      onClick={() => getMaxYear("Any")}
                    >
                      Any
                    </div>
                  )}
                </Menu.Item>
                {dateList.map((x, id) => (
                  <Menu.Item key={id} tabIndex="-1">
                    {({ active }) => (
                      <div
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-white"
                        }  px-4 py-2 text-sm cursor-pointer w-full`}
                        onClick={() => getMaxYear(x)}
                      >
                        {x}
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div> */}
      {/*       
      <div className="">
        <p className="barlow-condensed text-white text-xs md:text-sm uppercase font-bold mb-2 ">
          Max Year
        </p>
        <Menu as="div" className="relative w-full inline-block text-left">
          <div>
            <Menu.Button
              className="inline-flex justify-between w-full barlow-condensed appearance-none border rounded-sm py-2 px-3 text-white leading-tight bg-transparent  border-gray-300 hover:border-white"
              id="launchpad"
            >
              {maxYear ? maxYear : "Any"}
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full rounded-sm shadow-lg bg-slate-700 ring-1 ring-black ring-opacity-5 z-50">
              <div className="py-1">
                {year.map((date, id) => (
                  <Menu.Item key={id}>
                    {({ active }) => (
                      <div
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-white"
                        } block px-4 py-2 text-sm`}
                        onClick={getMaxYear(date)}
                      >
                        {date}
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div> */}
      <div className="col-span-2 md:col-span-1 mt-4 md:mt-0">
        <button
          className="barlow-condensed bg-white p-2 text-center text-black bold w-full  rounded-sm hover:bg-gray-200 transition duration-200 ease-in-out "
          onClick={handleButton}
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default SearchWidget;
