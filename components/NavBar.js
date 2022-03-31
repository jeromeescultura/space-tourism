import { useState, useEffect } from "react";
import logo from "../public/logo.svg";
import menu from "../public/menu.svg";
import close from "../public/close.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function NavBar() {
  const [activeUrl, setActiveUrl] = useState("");
  const router = useRouter();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setActiveUrl(router.pathname);
  }, [activeUrl, router]);

  const navList = [
    {
      id: "00",
      text: "Home",
      url: "/",
    },
    {
      id: "01",
      text: "Destination",
      url: "/destination",
    },
    {
      id: "02",
      text: "Crew",
      url: "/crew",
    },
    {
      id: "03",
      text: "Technology",
      url: "/tech",
    },
  ];
  return (
    <>
      <nav className="top-0 fixed flex justify-between  bg-transparent text-white items-center w-full mt-5 md:mt-0 lg:mt-12">
        <div className="mx-5 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 lg:mx-12 cursor-pointer">
          <Link passHref href="/">
            <Image
              src={logo}
              alt="Logo"
              width={50}
              height={50}
              layout="responsive"
            />
          </Link>
        </div>
        <div className="md:hidden mr-5">
          <Image
            src={menu}
            alt="Menu"
            width={30}
            height={30}
            onClick={() => setOpen(!open)}
            className="cursor-pointer w-8 h-8"
          />
        </div>
        <hr className="w-1/2 h-1 fixed right-[40%] hidden lg:block xl:right-1/4 opacity-25" />
        <div className="md:flex hidden backdrop-blur-[40px] bg-black/60">
          <ul className="text-white tracking-widest flex gap-12 barlow-condensed items-center justify-center py-6 px-8 lg:pr-32 lg:pl-24">
            {navList.map((nav, id) => (
              <li
                key={id}
                className={`${
                  activeUrl === nav.url &&
                  "underline underline-offset-[26px] first-line:"
                } cursor-pointer`}
              >
                <Link passHref href={nav.url}>
                  <p
                    className="uppercase light hover:text-primaryText hover:underline underline-offset-[26px] transition duration-150 ease-in-out"
                    onClick={() => setActiveUrl(nav.url)}
                  >
                    <span className="hidden lg:inline bold">{nav.id}</span>
                    {"   "}
                    {nav.text}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div
        className={`${
          open ? "w-64" : "hidden"
        }  z-10 right-0 h-screen backdrop-blur-[24px] bg-black/60 fixed text-white px-8 py-8 top-0 `}
      >
        <div className="float-right">
          <Image
            src={close}
            alt="Close"
            width={30}
            height={30}
            onClick={() => setOpen(!open)}
            className="p-1 cursor-pointer w-8 h-8"
          />
        </div>
        <ul className="tracking-widest mt-24 barlow-condensed">
          {navList.map((nav, id) => (
            <li
              key={id}
              className="flex my-4 hover:text-primaryText cursor-pointer"
            >
              <Link passHref href={nav.url}>
                <p
                  className={`${
                    activeUrl === nav.url
                      ? "underline text-white"
                      : "text-primaryText"
                  } bold uppercase hover:text-white hover:underline transition duration-150 ease-in-out underline-offset-[6px]`}
                >
                  {nav.id} <span className="ml-2  light">{nav.text}</span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default NavBar;
