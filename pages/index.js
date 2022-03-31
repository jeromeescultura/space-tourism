import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="bg-home-bg lg:bg-lg-home-bg bg-cover flex flex-col lg:flex-row h-screen bg-black items-center place-content-around pt-12 lg:px-36 lg:pt-32">
      <Head>
        <title>Space Tourism - Jerome Escultura</title>
        <meta name="description" content="Web Challenge by Jerome Escultura" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <div className="px-8 items-center lg:items-start justify-center text-center flex flex-col lg:text-left">
        <h1 className="text-primaryText tracking-wider md:text-xl lg:text-3xl lg:text-widest">
          SO, YOU WANT TO TRAVEL TO <br />
        </h1>
        <h2 className="Bellefair text-6xl font-semibold text-white mt-6 mb-10 md:mb-12 md:text-9xl lg:text-[150px]">
          SPACE
        </h2>

        <p className="text-primaryText text-base barlow md:w-3/5 lg:text-xl">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="lg:pt-24">
        <div className="bg-white rounded-full w-32 h-32 md:w-56 md:h-56 items-center justify-center flex">
          <h2 className="Bellefair md:text-3xl">EXPLORE</h2>
        </div>
      </div>
    </div>
  );
}
