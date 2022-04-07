import { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Moment from "react-moment";

function SearchWidget({ launchpads, launches }) {
  const [yearData, setYearData] = useState([
    {
      year: "",
    },
  ]);

  // const handleLaunchYear = () => {
  //   launches.map((launch) => console.log(launch.launch_date_local));
  // };
  // console.log(launchYear);

  useEffect(() => {
    launches.map((item) =>
      setYearData([...yearData, { year: item.launch_date_local }])
    );
  }, []);

  console.log(yearData);
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
        <p className="barlow-condensed text-white text-xs md:text-sm uppercase font-bold mb-2 ">
          Launch Pad
        </p>
        <Menu as="div" className="relative w-full inline-block text-left">
          <div>
            <Menu.Button
              className="inline-flex justify-between w-full barlow-condensed appearance-none border rounded-sm py-2 px-3 text-white leading-tight bg-transparent focus:outline-none focus:shadow-outline border-gray-300 hover:border-white"
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
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full rounded-sm shadow-lg bg-slate-700 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-white"
                      } block px-4 py-2 text-sm`}
                    >
                      Account settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-white"
                      } block px-4 py-2 text-sm`}
                    >
                      Support
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-white"
                      } block px-4 py-2 text-sm`}
                    >
                      License
                    </a>
                  )}
                </Menu.Item>
                <form method="POST" action="#">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-white"
                        }  block w-full text-left px-4 py-2 text-sm`}
                      >
                        Sign out
                      </button>
                    )}
                  </Menu.Item>
                </form>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className="">
        <p className="barlow-condensed text-white text-xs md:text-sm uppercase font-bold mb-2 ">
          Max Year
        </p>
        <Menu as="div" className="relative w-full inline-block text-left">
          <div>
            <Menu.Button
              className="inline-flex justify-between w-full barlow-condensed appearance-none border rounded-sm py-2 px-3 text-white leading-tight bg-transparent focus:outline-none focus:shadow-outline border-gray-300 hover:border-white"
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
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full rounded-sm shadow-lg bg-slate-700 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-white"
                      } block px-4 py-2 text-sm`}
                    >
                      Account settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-white"
                      } block px-4 py-2 text-sm`}
                    >
                      Support
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-white"
                      } block px-4 py-2 text-sm`}
                    >
                      License
                    </a>
                  )}
                </Menu.Item>
                <form method="POST" action="#">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-white"
                        }  block w-full text-left px-4 py-2 text-sm`}
                      >
                        Sign out
                      </button>
                    )}
                  </Menu.Item>
                </form>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className="">
        <p className="barlow-condensed text-white text-xs md:text-sm uppercase font-bold mb-2 ">
          Min Year
        </p>
        <Menu as="div" className="relative w-full inline-block text-left">
          <div>
            <Menu.Button
              className="inline-flex justify-between w-full barlow-condensed appearance-none border rounded-sm py-2 px-3 text-white leading-tight bg-transparent focus:outline-none focus:shadow-outline border-gray-300 hover:border-white"
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
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full rounded-sm shadow-lg bg-slate-700 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-white"
                      } block px-4 py-2 text-sm`}
                    >
                      Account settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-white"
                      } block px-4 py-2 text-sm`}
                    >
                      Support
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-white"
                      } block px-4 py-2 text-sm`}
                    >
                      License
                    </a>
                  )}
                </Menu.Item>
                <form method="POST" action="#">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-white"
                        }  block w-full text-left px-4 py-2 text-sm`}
                      >
                        Sign out
                      </button>
                    )}
                  </Menu.Item>
                </form>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className="col-span-2 md:col-span-1 mt-4 md:mt-0">
        <button className="barlow-condensed bg-white p-2 text-center text-black bold w-full  rounded-sm hover:bg-gray-200 transition duration-200 ease-in-out ">
          Apply
        </button>
      </div>
      {/* <div className="md:col-span-2">
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
      </div> */}
    </div>
  );
}

export default SearchWidget;
