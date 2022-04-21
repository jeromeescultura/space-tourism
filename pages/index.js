import Head from "next/head";
import Link from "next/link";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="bg-home-bg relative lg:bg-lg-home-bg bg-cover flex flex-col lg:flex-row h-screen bg-black items-center place-content-around lg:px-36 lg:pt-32">
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
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </p>
      </div>
      <div className="lg:pt-24">
        <Link passHref href="/destination">
          <div className="relative bg-white rounded-full w-32 h-32 hover:w-60 hover:h-60 md:w-56 md:h-56 items-center justify-center flex cursor-pointer duration-75 border-[#fff02]  hover:border-[55px]">
            <h2 className="Bellefair md:text-3xl text-black z-20">EXPLORE</h2>
            {/* <div className="absolute bg-white opacity-20 rounded-full w-[230px] h-[230px]"></div> */}
          </div>
        </Link>
      </div>
    </div>
  );
}
