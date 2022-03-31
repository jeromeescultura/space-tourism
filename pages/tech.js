import Image from "next/image";
import { useState } from "react";
import NavBar from "../components/NavBar";

const technologyList = [
  {
    id: "1",
    title: "LAUNCH VEHICLE",
    src: "launch.png",
    desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    id: "2",
    title: "SPACEPORT",
    src: "spaceport.png",
    desc: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
  },
  {
    id: "3",
    title: "SPACE CAPSULE",
    src: "capsule.png",
    desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

function Tech() {
  const [selected, setSelected] = useState("1");

  return (
    <>
      <NavBar />
      <div className="bg-lg-tech-bg bg-cover flex flex-col h-screen bg-black md:justify-around pt-20 md:pt-28 pb-12 lg:pl-28">
        <div className="flex text-white tracking-wider barlow-condensed mb-6 md:mb-10 justify-center md:justify-start md:ml-5 md:text-xl lg:pt-12 lg:text-2xl">
          <span className="opacity-25 mr-4 bold">03</span>
          <p> SPACE LAUNCH 101</p>
        </div>
        <div className="lg:flex-row lg:flex lg:justify-evenly">
          <div className="my-14 w-full lg:hidden">
            {technologyList.map(
              (tech, id) =>
                selected === tech.id && (
                  <Image
                    key={id}
                    src={`/images/technologies/${tech.src}`}
                    alt="Tech"
                    width={768}
                    height={310}
                    layout="responsive"
                    objectFit="cover"
                  />
                )
            )}
          </div>
          <div className="flex flex-col lg:flex-row text-center md:pb-28 lg:pb-0 items-center w-full">
            <div className="px-8 gap-4 lg:gap-8 flex lg:flex-col items-center justify-center">
              {technologyList.map((tech, id) => (
                <div
                  key={id}
                  className={`${
                    selected === tech.id && "bg-white text-black"
                  } flex cursor-pointer border-white border rounded-full w-10 h-10 md:w-16 md:h-16 items-center justify-center text-white hover:text-black hover:bg-white transition duration-150 ease-in-out`}
                  onClick={() => setSelected(tech.id)}
                >
                  <h2 className="Bellefai md:text-xl lg:text-2xl">{tech.id}</h2>
                </div>
              ))}
            </div>
            <div className="lg:text-left lg:ml-12">
              <h1 className="barlow-condensed text-primaryText tracking-widest uppercase mt-6 md:mt-14 lg:mt-0">
                THE TERMINOLOGY…
              </h1>
              {technologyList.map(
                (tech, id) =>
                  selected === tech.id && (
                    <div key={id} className="px-8 lg:px-0">
                      <h2 className="Bellefair text-2xl md:text-4xl font-semibold text-white mt-1 md:mt-4 mb-4 lg:mb-8 lg:text-[56px] lg:leading-tight">
                        {tech.title}
                      </h2>
                      <p className="text-primaryText text-base barlow md:px-28 lg:px-0 lg:text-[18px] lg:w-2/3">
                        {tech.desc}
                      </p>
                    </div>
                  )
              )}
            </div>
          </div>
          <div className=" w-full hidden lg:inline-flex justify-end">
            {technologyList.map(
              (tech, id) =>
                selected === tech.id && (
                  <Image
                    key={id}
                    src={`/images/technologies/lg-${tech.src}`}
                    alt="Tech"
                    width={500}
                    height={500}
                    objectFit="cover"
                  />
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Tech;
