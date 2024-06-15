"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

let menu = [
  { name: "Accueil", link: "/" },
  { name: "Services", link: "/services" },
  { name: "Contact", link: "/contact" },
];

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="hidden xl:flex justify-around gap-8 items-center p-4">
      <div className="">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/home/logo.png"
            className="me-3"
            alt="FlowBite Logo"
            width={100}
            height={100}
          />
          <h6 className="uppercase font-bold text-xl text-yellow-400">
            HAPPY DAY ENTERPRISES
          </h6>
        </Link>
      </div>

      <div className="flew justify-center items-center space-x-4">
        {menu.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className={`uppercase font-bold hover:text-emerald-600 ${
              pathname === item.link ? "text-emerald-600" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
