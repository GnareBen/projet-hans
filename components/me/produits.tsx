import React from "react";
import Image from "next/image";

let produits = [
  {
    title: "Lorem ipsum.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur.",
    price: 1000,
    image: "/images/foods/food1.png",
  },
  {
    title: "Lorem ipsum.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur.",
    price: 1000,
    image: "/images/foods/burger.png",
  },
  {
    title: "Lorem ipsum.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur.",
    price: 1000,
    image: "/images/foods/poulet1.png",
  },
  {
    title: "Lorem ipsum.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur.",
    price: 1000,
    image: "/images/foods/frite.png",
  },
  {
    title: "Lorem ipsum.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur.",
    price: 1000,
    image: "/images/foods/poulet2.png",
  },
  {
    title: "Lorem ipsum.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur.",
    price: 1000,
    image: "/images/foods/burger.png",
  },
];

export const Produits = () => {
  return (
    <section className="container mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Nos produits</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 md:gap-y-10 justify-items-center place-content-start">
        {produits.map((produit, index) => (
          <div key={index} className="mb-8 flex flex-col md:space-x-2">
            <Image
              className="h-20 md:h-full object-contain"
              src={produit.image}
              alt="mockup"
              width={240}
              height={200}
            />
            <div className="flex flex-col">
              <h2 className="text-ms md:text-2xl font-bold">{produit.title}</h2>
              <p className="md:text-xl">
                {produit.description.length > 50
                  ? produit.description.substring(0, 25) + "..."
                  : produit.description}
              </p>
              <p className="font-bold md:text-xl">{produit.price} FCFA</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
