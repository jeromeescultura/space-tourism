import Image from "next/image";
import NavBar from "../components/NavBar";
import carousel from "../public/carousel.svg";

const crewList = [
  {
    id: "1",
    name: "Douglas Hurley",
    position: "Commander",
    desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    imageLink: "crews/Douglas.png",
  },
  {
    id: "2",
    name: "MARK SHUTTLEWORTH",
    position: "Mission Specialist",
    desc: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    imageLink: "crews/Mark.png",
  },
  {
    id: "3",
    name: "Victor Glover",
    position: "PILOT",
    desc: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    imageLink: "crews/Victor.png",
  },
  {
    id: "4",
    name: "Anousheh Ansari",
    position: "Flight Engineer",
    desc: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    imageLink: "crews/Anousheh.png",
  },
];

function crew() {
  return (
    <>
      <NavBar />
      <div className="bg-lg-crew-bg bg-cover flex flex-col h-screen bg-black pt-20 md:pt-28 md:pb-0 lg:px-28">
        <div className="flex text-white tracking-wider barlow-condensed mb-6 md:mb-10 lg:mb-20 justify-center md:justify-start md:ml-5 md:text-xl lg:pt-12 lg:text-2xl">
          <span className="opacity-25 mr-4 bold">02</span>
          <p> MEET YOUR CREW</p>
        </div>
        <div className="flex justify-center w-full px-6 md:hidden">
          <Image
            src={`/../public/images/crews/Mark.png`}
            className="px-20 mb-6 "
            alt="Close"
            width={154}
            height={222}
            objectFit="cover"
          />
        </div>
        <div className="px-12 md:hidden">
          <hr className="border-b-2 border-[#383B4B] w-full h-[0.5px]" />
        </div>

        <div className="flex lg:flex-row lg:items-center h-full flex-col justify-between overflow-hidden">
          <div className="px-8 mt-20 md:mt-0 text-center lg:text-left lg:w-full">
            <div className="mb-8 md:hidden">
              <Image src={carousel} alt="carousel" width={100} height={15} />
            </div>
            <h1 className="Bellefair opacity-50 text-white tracking-wider uppercase md:text-xl lg:text-[32px]">
              Mission Specialist
            </h1>
            <h2 className="Bellefair text-2xl md:text-4xl md:mt-2 mb-6 md:mb-4 font-semibold text-white lg:text-[56px] mt-4 lg:mt-8 lg:leading-tight">
              MARK SHUTTLEWORTH
            </h2>
            <p className="text-primaryText text-base barlow md:px-28 mb-8 md:mb-14 lg:px-0 lg:w-2/3 lg:mt-12 ">
              Mark Richard Shuttleworth is the founder and CEO of Canonical, the
              company behind the Linux-based Ubuntu operating system.
              Shuttleworth became the first South African to travel to space as
              a space tourist.
            </p>
            <div className="hidden md:block">
              <Image src={carousel} alt="carousel" width={100} height={15} />
            </div>
          </div>

          <div className="justify-center w-full px-6 hidden md:flex lg:hidden">
            <div className="lg:w-full lg:h-full  w-1/2 h-1/2 text-center">
              <Image
                src={`/../public/images/crews/Mark.png`}
                className="px-20 mb-6 border-b-2 border-[#383B4B] md:border-0"
                alt="Crew"
                width={300}
                height={430}
                objectFit="cover"
              />
            </div>
          </div>
          {/* Larger Device */}
          <div className="text-center lg:w-1/2 px-6 hidden lg:flex lg:mr-10">
            <div className="lg:w-full md:mt-10 lg:mt-0">
              <Image
                src={`/../public/images/crews/Mark.png`}
                className="px-20 mb-6 border-b-2 border-[#383B4B] md:border-0"
                alt="Crew"
                width={530}
                height={780}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default crew;
