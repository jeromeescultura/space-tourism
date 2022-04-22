import { useState, useEffect } from "react";
import { server } from "../config";

import Image from "next/image";
import NavBar from "../components/NavBar";
import SearchFeed from "../components/SearchFeed";
import SearchWidget from "../components/SearchWidget";

import { ChevronDownIcon } from "@heroicons/react/solid";
import SearchRow from "../components/SearchRow";

export default function Discover({ launches, launchpads }) {
  let [launchesData, setLaunchesData] = useState([]);
  let [UserlaunchesData, setUserLaunchesData] = useState([]);
  let [searchTerm, setSearchTerm] = useState("");
  let [launchpadsList, setLaunchpadsList] = useState("");
  let [yearList, setYearList] = useState("");
  let [minYear, setMinYear] = useState("");
  let [minYearTerm, setMinYearTerm] = useState("");
  let [maxYear, setMaxYear] = useState("");
  let [maxYearTerm, setMaxYearTerm] = useState("");
  let [LaunchPad, setLaunchPad] = useState("");
  let [LaunchPadTerm, setLaunchPadTerm] = useState("");
  let [resultCount, setResultCount] = useState("");

  useEffect(() => {
    setLaunchesData(launches);
    setUserLaunchesData(launches);
    setResultCount(launches.length);
  }, [launches]);

  // Launchpad List
  useEffect(() => {
    let launchpadsList = launchpads.map((e) => [
      {
        id: e.id,
        full_name: e.full_name,
      },
    ]);
    setLaunchpadsList(launchpadsList);
  }, []);

  // Date
  useEffect(() => {
    let newYear = launches.map((e) => e.launch_date_local);
    let yearOnly = newYear.map((x) => formatDate(x));
    const uniqueYears = [...new Set(yearOnly.map((q) => q))];
    setYearList(uniqueYears);
  }, []);
  // Date formatter
  const formatDate = (dateString) => {
    const options = { year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const scrollToResults = () => {
    window.scroll({ top: 550, left: 0, behavior: "smooth" });
  };
  const backToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleKeyword = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleLaunchPad = (value) => {
    if (value !== "Any") {
      setLaunchPad(value);
      launchpads.map((x) => {
        if (x.id.toLowerCase() === value.toLowerCase()) {
          setLaunchPadTerm(x.full_name);
        }
      });
    } else {
      setLaunchPad("");
      setLaunchPadTerm("Any");
    }
  };

  const handleMinYear = (value) => {
    if (value !== "Any") {
      setMinYear(value);
      setMinYearTerm(value);
    } else {
      setMinYear("");
      setMinYearTerm("Any");
    }
  };
  const handleMaxYear = (value) => {
    if (value !== "Any") {
      setMaxYear(value);
      setMaxYearTerm(value);
    } else {
      setMaxYear("");
      setMaxYearTerm("Any");
    }
  };

  const handleSearch = () => {
    const newData = UserlaunchesData.filter((y) =>
      y.flight_number
        .toString()
        .toLowerCase()
        .includes(searchTerm == "" ? y.flight_number : searchTerm.toLowerCase())
    ).filter(
      (x) =>
        x.launch_site.site_id.toLowerCase() ==
        (LaunchPad == "" ? x.launch_site.site_id : LaunchPad.toLowerCase())
    );
    setLaunchesData(newData);
    setResultCount(newData.length);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
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
          loading="lazy"
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
          launchpads={launchpads}
          launches={launches}
          term={searchTerm}
          query={handleKeyword}
          LaunchPad={handleLaunchPad}
          LaunchPadTerm={LaunchPadTerm}
          minYear={handleMinYear}
          minYearTerm={minYearTerm}
          maxYear={handleMaxYear}
          maxYearTerm={maxYearTerm}
          handleSearch={handleSearch}
          handleKeyPress={handleKeyPress}
          launchpadsList={launchpadsList}
          yearList={yearList}
        />
        <div className="bg-slate-900 text-xs text-center pt-6 pb-3">
          <p className="text-slate-400">
            Showing {resultCount} {resultCount <= 1 ? "Mission" : "Missions"}
          </p>
        </div>
        {UserlaunchesData && UserlaunchesData.length >= 0 && (
          <SearchFeed launchesData={launchesData} launchpads={launchpads} />
        )}

        {resultCount === 0 && (
          <div className="bg-slate-900 text-lg text-center py-20">
            <p className="text-slate-400">No Result</p>
          </div>
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
