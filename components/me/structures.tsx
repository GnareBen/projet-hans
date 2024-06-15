import React from "react";
import Image from "next/image";

let structures = [
  { name: "N'GATCHI", image: "/images/home/ngatchi.jpeg" },
  { name: "LES DELICES DE KAYLIE", image: "/images/home/delice.jpg" },
  { name: "JADEN EVENT", image: "/images/home/event.jpg" },
];

export const Structures = () => {
  return (
    <section className="container mx-auto mb-36">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Nos structures</h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-3 gap-4 md:gap-4 justify-items-center place-content-start">
        {structures.map((structure, index) => (
          <div
            key={index}
            className="flex flex-col rounded-lg w-full md:w-[350px]"
          >
            <Image
              src={structure.image}
              alt={structure.name}
              width={350}
              height={350}
              className="rounded-lg h-[250px] w-full md:h-[350px] object-fill md:object-cover"
            />
            <div className="mt-4">
              <h6 className="text-xl font-bold">{structure.name}</h6>
              <p className="text-sm text-gray-600 w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quidem, quas, doloremque, quos voluptates voluptas quod
                quae reprehenderit nemo doloribus iure.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
