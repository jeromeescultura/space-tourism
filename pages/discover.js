import { useState, useEffect } from "react";
import { server } from "../config";
import dayjs from "dayjs";

import Image from "next/image";
import NavBar from "../components/NavBar";
import SearchFeed from "../components/SearchFeed";
import SearchWidget from "../components/SearchWidget";

import { ChevronDownIcon } from "@heroicons/react/solid";
import dateFormatter from "../components/DateFormatter";

const isBetween = require("dayjs/plugin/isBetween");
const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(isBetween);

export default function Discover({ launches, launchpads }) {
  let [launchesData, setLaunchesData] = useState([]);
  let [userLaunchesData, setUserLaunchesData] = useState([]);

  useEffect(() => {
    setLaunchesData(launches);
    setUserLaunchesData(launches);
  }, [launches]);

  const scrollToResults = () => {
    window.scroll({ top: 550, left: 0, behavior: "smooth" });
  };
  const backToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  const generateYearListDropdown = () => {
    let newYear = launchesData.map((e) => dateFormatter(e.launch_date_local));
    return [...new Set(newYear.map((year) => year))];
  };

  const generateLaunchPadListDropdown = () => {
    let list = launchpads.map((e) => [
      {
        id: e.id,
        full_name: e.full_name,
      },
    ]);
    return list;
  };

  const handleDate = (date, field) => {
    if (date !== "") {
      const filteredData = launchesData.filter((item) => {
        dayjs(item.launch_date_local).isBetween(
          field === "from" && date,
          dayjs(field === "to" && date)
        );
      });
      setUserLaunchesData(filteredData);
    } else {
      setUserLaunchesData(launchesData);
    }
  };

  const handleSearch = (filters) => {
    if (filters.keyword !== "") {
      const filteredData = launchesData.filter(
        (item) =>
          item.flight_number
            .toString()
            .toLowerCase()
            .includes(filters.keyword.toLowerCase()) ||
          item.rocket.rocket_name
            .toLowerCase()
            .includes(filters.keyword.toLowerCase()) ||
          item.payloads[0].payload_id
            .toLowerCase()
            .includes(filters.keyword.toLowerCase())
      );
      setUserLaunchesData(filteredData);
    } else if (filters.pad !== "" && filters.keyword === "") {
      const filteredWithPad = launchesData.filter((item) => {
        if (item.launch_site.site_id === filters.pad) {
          return item;
        }
      });
      setUserLaunchesData(filteredWithPad);
    } else if (filters.pad !== "" && filters.keyword !== "") {
      const filteredWithPad = userLaunchesData.filter((item) => {
        if (item.launch_site.site_id === filters.pad) {
          return item;
        }
      });
      setUserLaunchesData(filteredWithPad);
    } else if (filters.from !== "" && filters.to !== "") {
      const filteredWithDate = launchesData.filter((item) => {
        if (
          dayjs(dateFormatter(item.launch_date_local)).isBetween(
            parseInt(filters.from - 1).toString(),
            dayjs((parseInt(filters.to) + 1).toString()),
            "year"
          )
        ) {
          return item;
        }
      });
      setUserLaunchesData(filteredWithDate);
    } else if (filters.from !== "") {
      const filteredFrom = launchesData.filter((item) => {
        if (dayjs(item.launch_date_local).isSameOrAfter(filters.from, "year")) {
          return item;
        }
      });
      setUserLaunchesData(filteredFrom);
    } else if (filters.to !== "") {
      const filteredTo = launchesData.filter((item) => {
        if (dayjs(item.launch_date_local).isSameOrBefore(filters.to, "year")) {
          return item;
        }
      });
      setUserLaunchesData(filteredTo);
    } else {
      setUserLaunchesData(launchesData);
    }
  };

  return (
    <div className="bg-[#0a0e19]">
      <NavBar />
      <div className="relative h-[200px] sm:h-[300px] lg:h-[65vh] ">
        <Image
          src="/images/banner.png"
          objectFit="cover"
          layout="fill"
          alt="banner"
          priority
        />
        <div className="absolute top-1/2 w-full text-center">
          <h4 className="Bellefair uppercase text-xl md:text-3xl lg:text-6xl text-white">
            Discover Space Mission
          </h4>
        </div>
        <div className="absolute bottom-10 hidden lg:block z-30 w-full">
          <ChevronDownIcon
            className="cursor-pointer text-lg w-10 h-10 text-white text-center mx-auto"
            onClick={() => scrollToResults()}
          />
        </div>
        <div className="absolute bottom-0   h-[100px] text-center w-full gradient"></div>
      </div>
      <div className="w-full mx-auto md:w-[90%] lg:w-[80%]">
        <SearchWidget
          // launchpads={launchpads}
          // launches={launches}
          // query={handleKeyword}
          // LaunchPad={handleLaunchPad}
          // LaunchPadTerm={LaunchPadTerm}
          // minYear={handleMinYear}
          // minYearTerm={minYearTerm}
          // maxYear={handleMaxYear}
          // maxYearTerm={maxYearTerm}
          handleSearch={handleSearch}
          dateList={generateYearListDropdown()}
          launchpadsList={generateLaunchPadListDropdown()}
          // handlePad={handlePad}
        />
        <div className="bg-slate-900 text-xs text-center pt-6 pb-3">
          <p className="text-slate-400">
            Showing {userLaunchesData.length}{" "}
            {userLaunchesData.length <= 1 ? "Mission" : "Missions"}
          </p>
        </div>
        {userLaunchesData && userLaunchesData.length > 0 ? (
          <SearchFeed launchesData={userLaunchesData} launchpads={launchpads} />
        ) : (
          "No Data"
        )}
      </div>
      <div className="py-10 w-[90%] md:w-[80%] mx-auto flex justify-between">
        <p className="text-sm text-slate-500 barlow">
          Copyright &copy; 2022 Space Savvy
        </p>
        <p
          className="text-sm text-slate-500 underline barlow cursor-pointer hover:text-white"
          onClick={() => backToTop()}
        >
          Back to Top
        </p>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const launches = await fetch(`${server}/api/launches`).then((rest) =>
    rest.json()
  );
  const launchpads = await fetch(`${server}/api/launchpads`).then((rest) =>
    rest.json()
  );
  // const launches = await fetch("http://localhost:3000/api/launches").then(
  //   (rest) => rest.json()
  // );
  // const launchpads = await fetch("http://localhost:3000/api/launchpads").then(
  //   (rest) => rest.json()
  // );

  return {
    props: {
      launches,
      launchpads,
    },
  };
}
