import Image from "next/image";
import NavBar from "../components/NavBar";
import SearchFeed from "../components/SearchFeed";
import SearchWidget from "../components/SearchWidget";

function discover() {
  return (
    <>
      <NavBar />
      <div className="bg-[#0a0e19]">
        <div className="relative h-[200px] sm:h-[300px] lg:h-[65vh] ">
          <Image
            src="/images/banner.png"
            height={200}
            width={200}
            objectFit="cover"
            layout="fill"
            alt="banner"
          />
          <div className="absolute top-1/2 w-full text-center">
            <h4 className="Bellefair uppercase text-xl md:text-3xl lg:text-6xl text-white">
              Discover Space Mission
            </h4>
          </div>
          <div className="absolute bottom-0  z-50 h-[100px] text-center w-full gradient"></div>
        </div>
        <div className="w-full mx-auto md:w-[90%] lg:w-[80%]">
          <SearchWidget />
          <div className="bg-slate-900 text-xs text-center pt-6 pb-3">
            <p className="text-slate-400">Showing 5 Missions</p>
          </div>
          <SearchFeed />
        </div>
      </div>
    </>
  );
}

export default discover;
