import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

let services = [
  {
    title: "N'Gatchi",
    number: "+225 00 00 00 00 00",
    email: "john@doe.com",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis id suscipit quis adipisci earum odit doloremque, eaque illo rem consequuntur, laborum repellat reprehenderit. Dolorem harum, incidunt obcaecati voluptatum excepturi labore mollitia eligendi ipsam magnam non itaque esse eius numquam delectus in omnis sed velit ad! Quaerat unde, excepturi quo, at officia, assumenda temporibus nostrum ullam sapiente ducimus iste voluptas expedita illo et ipsam totam deleniti eos magni tenetur? Quo maxime fuga dignissimos eius! Ex quasi vel officia nesciunt laboriosam labore culpa, eos, totam eius dolorem ducimus! Rerum dolorum fuga aliquam, vero nemo deleniti libero ipsum, reiciendis optio officia facilis harum?",
    image: "/images/home/ngatchi.jpeg",
  },
  {
    title: "LES DELICES DE KAYLIE",
    number: "+225 00 00 00 00 00",
    email: "john@doe.com",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis id suscipit quis adipisci earum odit doloremque, eaque illo rem consequuntur, laborum repellat reprehenderit. Dolorem harum, incidunt obcaecati voluptatum excepturi labore mollitia eligendi ipsam magnam non itaque esse eius numquam delectus in omnis sed velit ad! Quaerat unde, excepturi quo, at officia, assumenda temporibus nostrum ullam sapiente ducimus iste voluptas expedita illo et ipsam totam deleniti eos magni tenetur? Quo maxime fuga dignissimos eius! Ex quasi vel officia nesciunt laboriosam labore culpa, eos, totam eius dolorem ducimus! Rerum dolorum fuga aliquam, vero nemo deleniti libero ipsum, reiciendis optio officia facilis harum?",
    image: "/images/home/delice.jpg",
  },
  {
    title: "JADEN EVENT",
    number: "+225 00 00 00 00 00",
    email: "john@doe.com",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis id suscipit quis adipisci earum odit doloremque, eaque illo rem consequuntur, laborum repellat reprehenderit. Dolorem harum, incidunt obcaecati voluptatum excepturi labore mollitia eligendi ipsam magnam non itaque esse eius numquam delectus in omnis sed velit ad! Quaerat unde, excepturi quo, at officia, assumenda temporibus nostrum ullam sapiente ducimus iste voluptas expedita illo et ipsam totam deleniti eos magni tenetur? Quo maxime fuga dignissimos eius! Ex quasi vel officia nesciunt laboriosam labore culpa, eos, totam eius dolorem ducimus! Rerum dolorum fuga aliquam, vero nemo deleniti libero ipsum, reiciendis optio officia facilis harum?",
    image: "/images/home/event.jpg",
  },
];

const Services = () => {
  return (
    <section className=" container mt-16">
      <h1 className="text-center text-3xl xl:text-6xl font-bold mb-14">
        Nos Services
      </h1>
      <div className="container">
        <div className="services-content">
          {services.map((service, index) => (
            <div className="mb-16" key={index}>
              <h2 className="text-xl uppercase md:text-5xl font-bold mb-4">
                {service.title}
              </h2>
              <Image
                src={service.image}
                className="w-full mb-6 max-h-[540px] object-cover rounded-lg"
                alt="service"
                width={400}
                height={300}
              />
              <p className="text-sm md:text-xl mb-6">{service.description}</p>
              <div className="flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Contact</h3>
                <div className="flex items-center gap-4 text-sm md:text-xl font-medium">
                  <FaPhone className="hover:fill-emerald-600" />
                  {service.email}
                </div>
                <div className="flex items-center gap-4 text-sm md:text-xl font-medium">
                  <FaEnvelope className="hover:fill-emerald-600" />
                  {service.number}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
