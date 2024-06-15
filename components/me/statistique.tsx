"use client";

import CountUp from "react-countup";

let statistiques = [
  {
    title: 300,
    description: "Lorem ipsum dolor",
  },
  {
    title: 184,
    description: "Lorem ipsum dolor",
  },
  {
    title: 100,
    description: "Lorem ipsum dolor",
  },
];

const Statistique = () => {
  return (
    <section className="container mx-auto">
      <h1 className="text-sm md:text-2xl font-medium text-center mb-8">
        Que peut faire HAPPY DAY ENTREPRISE pour vous ?
      </h1>
      <div className="flex justify-center md:space-x-36 space-x-4 items-center">
        {statistiques.map((statistique, index) => (
          <div key={index} className="font-medium">
            <h2 className="text-4xl md:text-6xl font-bold">
              <CountUp end={statistique.title} duration={6} prefix="+" />
            </h2>
            <p className="text-sm md:text-xl">{statistique.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistique;
