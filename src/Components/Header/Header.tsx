import { useState } from "react";
import "../Header/Header.scss";
import { Close, Menu } from "@mui/icons-material";
const Header = () => {
  const [OpenMenu, setOpenMenu] = useState(false);

  const menulinks = [
    {
      name: "HOME",
      link: "#home",
    },
    {
      name: "ABOUT",
      link: "#about",
    },
    {
      name: "SKILLS",
      link: "#skills",
    },
    {
      name: "PROJECTS",
      link: "#projects",
    },
    {
      name: "CONTACT",
      link: "#contact",
    },
  ];
  return (
    <nav
      data-aos="fade-down"
      className="bg-[#444] w-full h-20 fixed inset-0 flex items-center text-white z-[999] px-2"
    >
      <div className="container mx-auto flex items-center justify-between p-2 gap-5">
        {/* //left */}
        <div className="flex-1">
          <span className="text-4xl font-serif tracking-wide first-letter:text-4xl first-letter:text-[#ff3c78] uppercase">
            S<span className="text-cyan-600 text-xl">uhad</span>
          </span>
          <span className="tracking-wider block">Fullstack Developer</span>
        </div>

        {/* //middle */}
        <div className="flex-1 hidden md:block">
          <ul className="flex  items-center gap-10 font-roboto">
            {menulinks.map((menu, i) => (
              <li key={i}>
                <a href={menu.link} className="menu-link">
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* //right */}
        <div className="hidden md:block">
          <div className="flex-1 items-center gap-4">
            <button className="border rounded-md px-5 py-1.5 hover:bg-black/75 duration-300">
              <a href="/assets/Resume/SuhadKt.pdf" download="SuhadKt.pdf">
                Resume
              </a>
            </button>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className="w-8 h-8 md:hidden flex justify-center items-center hover:bg-black/20 rounded-full z-50"
          onClick={() => setOpenMenu(!OpenMenu)}
        >
          {OpenMenu ? <Close /> : <Menu />}
        </div>

        <div
          className={`md:hidden absolute top-0 w-2/3 h-screen bg-gray-800 duration-500 ${
            OpenMenu ? "right-0" : "-right-full"
          }`}
        >
          {OpenMenu && (
            <ul className="flex flex-col justify-center  gap-6 font-ysabeau px-1 py-6 mt-14">
              {menulinks.map((menu, i) => (
                <li
                  key={i}
                  onClick={() => setOpenMenu(false)}
                  className="hover:bg-gray-800 border-l-2 border-l-rose-600 px-5"
                >
                  <a href={menu.link} className="menu-link">
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
