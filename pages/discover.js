import { useState, useEffect } from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";
import SearchFeed from "../components/SearchFeed";
import SearchWidget from "../components/SearchWidget";

import { ChevronDownIcon } from "@heroicons/react/solid";

export default function discover({ launches, launchpads }) {
  const [activeUrl, setActiveUrl] = useState("");

  useEffect(() => {
    setActiveUrl(window.location.origin);
  }, [activeUrl]);

  const scrollToResults = () => {
    window.scroll({ top: 550, left: 0, behavior: "smooth" });
  };
  const backToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#0a0e19]">
      <NavBar />
      <div className="relative h-[200px] sm:h-[300px] lg:h-[65vh] ">
        <Image
          src="/images/banner.png"
          height={1000}
          width={666}
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
        <SearchWidget launchpads={launchpads} launches={launches} />
        <div className="bg-slate-900 text-xs text-center pt-6 pb-3">
          <p className="text-slate-400">Showing 5 Missions</p>
        </div>
        <SearchFeed launches={launches} launchpads={launchpads} />
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
  const launches = await fetch("http://localhost:3000/api/launches").then(
    (rest) => rest.json()
  );
  const launchpads = await fetch("http://localhost:3000/api/launchpads").then(
    (rest) => rest.json()
  );

  return {
    props: {
      launches,
      launchpads,
    },
  };
}
