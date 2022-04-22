import { Fragment, useState, useEffect, useRef } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function SearchWidget({
  launchpads,
  launches,
  query,
  LaunchPad,
  LaunchPadTerm,
  handleSearch,
  handleKeyPress,
  minYear,
  minYearTerm,
  maxYear,
  maxYearTerm,
}) {
  let [year, setYear] = useState([]);
  let [launchpadsList, setLaunchpadsList] = useState([]);
  const inputE1 = useRef("");

  useEffect(() => {
    let newYear = launches.map((e) => e.launch_date_local);
    let yearOnly = newYear.map((x) => formatDate(x));
    const uniqueYears = [...new Set(yearOnly.map((q) => q))];
    setYear(["Any", ...uniqueYears]);
  }, []);
  useEffect(() => {
    let launchpadsList = launchpads.map((e) => [
      {
        id: e.id,
        full_name: e.full_name,
      },
    ]);
    setLaunchpadsList([[{ id: "Any", full_name: "Any" }], ...launchpadsList]);
  }, []);
  useEffect(() => {
    query(inputE1.current.value);
  }, [query]);

  // Date formatter
  const formatDate = (dateString) => {
    const options = { year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getSearchTerm = () => {
    query(inputE1.current.value);
  };

  const getLaunchPad = (value) => {
    LaunchPad(value);
  };
  const getMaxYear = (value) => {
    maxYear(value);
  };
  const getMinYear = (value) => {
    minYear(value);
  };

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
          ref={inputE1}
          className=" w-full barlow-condensed appearance-none border rounded-sm py-2 px-3 text-white leading-tight bg-transparent "
          id="keywords"
          type="text"
          placeholder="eg Falcon"
          onChange={getSearchTerm}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="md:col-span-2">
        <p className="barlow-condensed text-white text-xs md:text-sm uppercase font-bold mb-2 ">
          Launch Pad
        </p>
        <Menu as="div" className="relative w-full inline-block text-left">
          <div>
            <Menu.Button
              className="inline-flex justify-between w-full barlow-condensed appearance-none border rounded-sm py-2 px-3 text-white leading-tight bg-transparent border-gray-300 hover:border-white text-xs"
              id="launchpad"
            >
              {LaunchPadTerm ? LaunchPadTerm : "Any"}
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
                {launchpadsList.map((site) =>
                  site.map((x) => (
                    <Menu.Item key={x.id} tabIndex="-1">
                      {({ active }) => (
                        <div
                          className={`${
                            active ? "bg-gray-100 text-gray-900" : "text-white"
                          }  px-4 py-2 text-sm cursor-pointer w-full`}
                          onClick={() => getLaunchPad(x.id)}
                        >
                          {x.full_name}
                        </div>
                      )}
                    </Menu.Item>
                  ))
                )}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className="md:col-span-2">
        <p className="barlow-condensed text-white text-xs md:text-sm uppercase font-bold mb-2 ">
          Max Year
        </p>
        <Menu as="div" className="relative w-full inline-block text-left">
          <div>
            <Menu.Button
              className="inline-flex justify-between w-full barlow-condensed appearance-none border rounded-sm py-2 px-3 text-white leading-tight bg-transparent border-gray-300 hover:border-white text-xs"
              id="launchpad"
            >
              {maxYearTerm ? maxYearTerm : "Any"}
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
                {year.map((x, id) => (
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
      </div>
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
      <div className="md:col-span-2">
        <p className="barlow-condensed text-white text-xs md:text-sm uppercase font-bold mb-2 ">
          Min Year
        </p>
        <Menu as="div" className="relative w-full inline-block text-left">
          <div>
            <Menu.Button
              className="inline-flex justify-between w-full barlow-condensed appearance-none border rounded-sm py-2 px-3 text-white leading-tight bg-transparent border-gray-300 hover:border-white text-xs"
              id="launchpad"
            >
              {minYearTerm ? minYearTerm : "Any"}
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
                {year.map((x, id) => (
                  <Menu.Item key={id} tabIndex="-1">
                    {({ active }) => (
                      <div
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-white"
                        }  px-4 py-2 text-sm cursor-pointer w-full`}
                        onClick={() => getMinYear(x)}
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
      </div>
      <div className="col-span-2 md:col-span-1 mt-4 md:mt-0">
        <button
          className="barlow-condensed bg-white p-2 text-center text-black bold w-full  rounded-sm hover:bg-gray-200 transition duration-200 ease-in-out "
          onClick={handleSearch}
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default SearchWidget;
