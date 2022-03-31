import Image from "next/image";
import { useState } from "react";
import NavBar from "../components/NavBar";

const destinationsList = [
  {
    title: "Moon",
    src: "destinations/Moon.png",
    desc: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    travelTime: "3 Days",
  },
  {
    title: "Mars",
    src: "destinations/Mars.png",
    desc: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    travelTime: "9 Months",
  },
  {
    title: "Europa",
    src: "destinations/Europa.png",
    desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. KM",
    travelTime: "3 Years",
  },
  {
    title: "Titan",
    src: "destinations/Titan.png",
    desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    travelTime: "7 Years",
  },
];

function Destination() {
  const [selected, setSelected] = useState("Moon");
  return (
    <>
      <NavBar />
      <div className="bg-destinations-bg lg:bg-lg-destinations-bg bg-cover flex flex-col h-screen bg-black pt-20 md:pt-28 pb-12 lg:px-28">
        <div className="flex text-white tracking-wider barlow-condensed mb-6 md:mb-10 lg:mb-20 justify-center md:justify-start md:ml-5 md:text-xl lg:pt-12 lg:text-2xl">
          <span className="opacity-25 mr-4 bold">01</span>
          <p> PICK YOUR DESTINATION</p>
        </div>
        <div className="lg:flex-row lg:flex lg:justify-evenly">
          <div className="flex justify-center lg:flex-1 ">
            {destinationsList.map(
              (destination, id) =>
                selected === destination.title && (
                  <div
                    key={id}
                    className="w-1/2 md:w-1/3 lg:w-full lg:text-center lg:p-10"
                  >
                    <Image
                      src={`/../public/images/${destination.src}`}
                      alt="Image"
                      width={400}
                      height={400}
                      className="mb-6"
                      objectFit="cover"
                    />
                  </div>
                )
            )}
          </div>
          <div className="lg:items-start lg:flex-1 flex flex-col justify-between">
            <div className="px-8 text-center lg:text-left md:mt-8 lg:mt-0 lg:px-0 lg:top-0">
              <ul className="barlow-condensed text-primaryText tracking-wider inline-flex gap-6 my-4 lg:my-0">
                {destinationsList.map((destination, id) => (
                  <li
                    key={id}
                    className={`${
                      selected === destination.title
                        ? "text-white underline underline-offset-8 "
                        : ""
                    }uppercase cursor-pointer hover:text-white`}
                    onClick={() => setSelected(destination.title)}
                  >
                    {destination.title}
                  </li>
                ))}
              </ul>
              <h2 className="Bellefair text-6xl font-semibold text-white my-4 uppercase lg:text-[100px] lg:mt-16">
                {selected}
              </h2>
              {destinationsList.map((destination, id) => (
                <p
                  key={id}
                  className="text-primaryText text-base barlow  md:px-24 lg:px-0 lg:w-2/3"
                >
                  {selected === destination.title && destination.desc}
                </p>
              ))}
              <hr className="border-[#383B4B] h-0.5 mt-6 lg:mt-12" />
            </div>
            <div className="mt-8 lg:mt-0 text-center md:flex align-top items-center justify-center md:justify-around md:px-16 lg:items-start lg:justify-items-start lg:justify-start lg:px-0  lg:mb-8 lg:text-left">
              <div className="uppercase lg:mr-20">
                <p className="text-primaryText barlow-condensed tracking-wider mb-1 ">
                  Avg. Distance
                </p>
                {destinationsList.map((destination, id) => (
                  <p key={id} className="Bellefair text-3xl text-white">
                    {selected === destination.title && destination.distance}
                  </p>
                ))}
              </div>
              <div className="uppercase mt-4 md:mt-0">
                <p className="text-primaryText barlow-condensed tracking-wider mb-1">
                  Est. travel time
                </p>
                {destinationsList.map((destination, id) => (
                  <p key={id} className="Bellefair text-3xl text-white">
                    {selected === destination.title && destination.travelTime}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Destination;
