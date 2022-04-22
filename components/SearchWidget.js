import { Fragment, useState, useEffect, useRef } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Moment from "react-moment";

function SearchWidget({
  launchpads,
  launches,
  query,
  searchLaunchPad,
  searchLaunchPadTerm,
  handleSearch,
}) {
  let [year, setYear] = useState([]);
  let [launchpadsList, setLaunchpadsList] = useState([]);
  const inputE1 = useRef("");

  useEffect(() => {
    let newYear = launches.map((e) => e.launch_date_local);
    setYear(newYear);
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

  const getSearchTerm = () => {
    query(inputE1.current.value);
  };

  const getLaunchPad = (value) => {
    searchLaunchPad(value);
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
          className=" w-full barlow-condensed appearance-none border rounded-sm py-2 px-3 text-white leading-tight bg-transparent focus:outline-none focus:shadow-outline"
          id="keywords"
          type="text"
          placeholder="eg Falcon"
          onChange={getSearchTerm}
        />
      </div>
      <div className="md:col-span-2">
        <p className="barlow-condensed text-white text-xs md:text-sm uppercase font-bold mb-2 ">
          Launch Pad
        </p>
        <Menu as="div" className="relative w-full inline-block text-left">
          <div>
            <Menu.Button
              className="inline-flex justify-between w-full barlow-condensed appearance-none border rounded-sm py-2 px-3 text-white leading-tight bg-transparent focus:outline-none focus:shadow-outline border-gray-300 hover:border-white text-xs"
              id="launchpad"
            >
              {searchLaunchPadTerm ? searchLaunchPadTerm : "Any"}
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
              className="origin-top-right absolute right-0 mt-2 w-full rounded-sm shadow-lg bg-slate-700 ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
            >
              <div className="py-1">
                {launchpadsList.map((site) =>
                  // console.log(site),
                  site.map((x) => (
                    <Menu.Item key={x.id}>
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
                {/* {year.map((date) => (
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-white"
                        } block px-4 py-2 text-sm`}
                      >
                        {date.launch_date_local}
                      </a>
                    )}
                  </Menu.Item>
                ))} */}
                {/* 
{posts.map(post =>
    [...new Set(post.frontmatter.tags)].map(tag => (
      <Link
        key={tag + `tag`}
        to={`/tags/${kebabCase(tag)}/`}
        className="tag is light"
      >
        {tag}
      </Link>
    ))
  )} */}
                {/* {year.map((launchDate) =>
                  [...new Set(launchDate)].map((yearDate) => (
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={`${
                            active ? "bg-gray-100 text-gray-900" : "text-white"
                          } block px-4 py-2 text-sm`}
                        >
                          {yearDate}
                        </a>
                      )}
                    </Menu.Item>
                  ))
                )} */}
                {year.map((date, id) => (
                  <Menu.Item key={id}>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-white"
                        } block px-4 py-2 text-sm`}
                      >
                        <Moment date={date} format="YYYY" />
                      </a>
                    )}
                  </Menu.Item>
                ))}
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
        <button
          className="barlow-condensed bg-white p-2 text-center text-black bold w-full  rounded-sm hover:bg-gray-200 transition duration-200 ease-in-out "
          onClick={handleSearch}
        >
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
