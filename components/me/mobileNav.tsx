"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TfiAlignRight } from "react-icons/tfi";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

let menu = [
  { name: "Accueil", link: "/" },
  { name: "Services", link: "/services" },
  { name: "Contact", link: "/contact" },
];

const MobilNav = () => {
  const pathname = usePathname();
  return (
    <nav className="text-right me-4 mt-4 xl:hidden">
      <Sheet>
        <SheetTrigger>
          <TfiAlignRight className="text-emerald-600 h-8 w-8" />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col justify-between items-center">
            <div className="mt-36">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/home/logo.png"
                  className="me-3"
                  alt="FlowBite Logo"
                  width={100}
                  height={100}
                />
                <h6 className="uppercase font-bold text-xl">
                  HAPPY DAY ENTERPRISES
                </h6>
              </Link>
            </div>

            <div className="flex mt-24 flex-col justify-center items-center space-y-6">
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
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobilNav;
