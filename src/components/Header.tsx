import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";
import { navbarItems } from "@/constants";
// import { FaGithub } from "react-icons/fa";
// import { signIn, signOut, useSession } from "next-auth/react";
// import { FcGoogle } from "react-icons/fc";

const Header: React.FC = () => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  // const { data: session } = useSession();

  // useEffect(() => {
  //   if (session) {
  //     console.log("User session data:", session);
  //   }
  // }, [session]);

  return (
    <>
      <div className="w-full z-50 p-5 border-b bg-black border-b-white border-opacity-30 flex items-center justify-between top-0 fixed">
        {/* Logo */}
        <div className="text-xl tracking-widest font-medium logo-anim">
          <Link href="/">RAHAT ALI BAIG</Link>
        </div>

        <div className="gap-2 flex items-center">
          {/* {session && session.user?.image && session.user?.name && <img
            src={session.user.image}
            alt={session.user.name}
            className="w-10 h-10 rounded-full border-2 border-white/50"
          />} */}

          {/* Menu Icon */}
          <CgMenuGridO
            className="cursor-pointer text-white text-3xl"
            onClick={() => setToggleNav(true)}
          />
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed w-full h-screen p-10 overflow-y-auto bg-black z-[60] transition-all flex justify-center duration-500 ${toggleNav
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none z-0"
          }`}
      >
        <IoCloseOutline
          className="absolute top-5 right-5 text-4xl cursor-pointer"
          onClick={() => setToggleNav(false)}
        />

        <div className="border-b border-white/10 w-full fixed md:top-[60px] top-[30px]" />
        <div className="border-r border-white/10 h-full fixed md:left-[60px] left-[30px] top-0" />

        {/* Main Navbar */}
        <div className="lg:w-11/12 w-full flex md:flex-row flex-col gap-5 items-center 2xl:px-16 xl:px-10 lg:px-8 md:px-6 px-4 lg:py-[120px] py-16">
          <ul className="flex flex-col 2xl:gap-16 gap-12 md:w-1/2 w-full self-start">
            {navbarItems.map((item) => (
              <li
                key={item.id}
                className={`2xl:text-5xl text-4xl font-extralight transition-all duration-700 hover:translate-x-4 ${toggleNav ? "translate-y-6" : "-translate-y-6 opacity-0"
                  }`}
                onClick={() => setToggleNav(false)}
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>

          {/* Login/Logout/Profile Section */}
          {/* <div className="flex flex-col gap-10 items-center md:w-1/2 w-full py-20">
            {session ? (
              <>
                <button
                  onClick={() => signOut()}
                  className="flex items-center justify-center px-10 gap-3 py-4 font-medium text-2xl bg-gray-100/20 hover:bg-gray-100/30 transition-all duration-300 border-2 border-gray-100 rounded-full text-white max-w-[500px] w-full"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => signIn("google")}
                  className="flex items-center justify-center md:px-10 px-6 gap-3 md:py-4 py-3 font-medium xl:text-2xl md:text-xl text-lg bg-gray-100/20 hover:bg-gray-100/30 transition-all duration-300 border-2 border-gray-100 rounded-full text-white max-w-[500px] w-full"
                >
                  <FcGoogle className="xl:text-4xl md:text-3xl text-2xl" /> Continue with Google
                </button>
                <button
                  onClick={() => signIn("github")}
                  className="flex items-center justify-center md:px-10 px-6 gap-3 md:py-4 py-3 font-medium xl:text-2xl md:text-xl text-lg bg-gray-100/20 hover:bg-gray-100/30 transition-all duration-300 border-2 border-gray-100 rounded-full text-white max-w-[500px] w-full"
                >
                  <FaGithub className="xl:text-4xl md:text-3xl text-2xl" /> Continue with GitHub
                </button>
              </>
            )}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
