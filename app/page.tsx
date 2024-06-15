import HeroSection from "@/components/me/hero";
import { Produits } from "@/components/me/produits";
import Statistique from "@/components/me/statistique";
import { Structures } from "@/components/me/structures";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Statistique />
      <Structures />
      <Produits />
    </main>
  );
}
