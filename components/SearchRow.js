import Image from "next/image";

function SearchRow() {
  return (
    <div className="flex p-4 gap-4 border-b border-slate-700 md:py-6 bg-slate-900">
      <div className="text-left w-[100px]">
        <Image
          src="https://spacexpatchlist.space/thumbs/usaf_30sw_f1_001_tacsat_1.png"
          height={70}
          width={70}
          objectFit="contain"
          alt="thumbnail"
        />
      </div>
      <div className="flex-grow">
        <div>
          <h4 className="barlow text-white">Falcon 9 - Enchoster 10</h4>
          <p className="barlow-condensed text-gray-300 text-xs md:text-sm md:w-4/5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="space-x-2 lg:space-x-4 space-y-2 mt-2 md:mt-8">
          <button className="barlow-condensed border p-1 md:px-4 rounded-sm text-sm text-gray-400 border-gray-400 hover:border-white hover:text-white">
            Reddit Campaign
          </button>
          <button className="barlow-condensed border p-1 md:px-4 rounded-sm text-sm text-gray-400 border-gray-400 hover:border-white hover:text-white">
            Reddit Launch
          </button>
          <button className="barlow-condensed border p-1 md:px-4 rounded-sm text-sm text-gray-400 border-gray-400 hover:border-white hover:text-white">
            Reddit Media
          </button>
          <button className="barlow-condensed border p-1 md:px-4 rounded-sm text-sm text-gray-400 border-gray-400 hover:border-white hover:text-white">
            Press kit
          </button>
          <button className="barlow-condensed border p-1 md:px-4 rounded-sm text-sm text-gray-400 border-gray-400 hover:border-white hover:text-white">
            Watch Video
          </button>
        </div>
      </div>
      <div className="text-center w-[150px]">
        <h2 className="barlow text-white">#49</h2>
        <p className="text-gray-400 barlow-condensed">Flight Number</p>
      </div>
    </div>
  );
}
// https://spacexpatchlist.space/thumbs/usaf_30sw_f1_001_tacsat_1.png
export default SearchRow;
