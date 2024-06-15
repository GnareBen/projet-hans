"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return (
    <section className="container mx-auto h-full mb-20">
      <div className="h-full">
        <div className="flex flex-col justify-between items-center xl:flex-row gap-8">
          <div className="order-2 xl:w-1/2 xl:order-none">
            <h1 className="text-3xl mb-4 font-extrabold text-emerald-600">
              HAPPY DAY ENTERPRISES
            </h1>
            <p className="self-start mb-4 font-light text-gray-500 text-xl max-with-[500px]">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>
            <div className="flex items-center space-x-4">
              <Button
                className="self-start bg-blue-700 hover:bg-blue-800 text-xl font-bold text-white"
                asChild
                size={"lg"}
              >
                <Link href="/signup">Nous contacter</Link>
              </Button>
              <div className="flex space-x-2 md:space-x-4 xl:space-x-4">
                <FaFacebook className="text-3xl text-blue-600 hover:text-emerald-600" />
                <FaTwitter className="text-3xl text-blue-400 hover:text-emerald-600" />
                <FaInstagram className="text-3xl text-red-500 hover:text-emerald-600" />
                <FaLinkedin className="text-3xl text-blue-800 hover:text-emerald-600" />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none xl:w-1/2">
            <Image
              className="rounded-md"
              width={1080}
              height={1920}
              src="/images/home/heroimage.jpg"
              alt="mockup"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
