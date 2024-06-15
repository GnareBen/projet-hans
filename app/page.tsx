import HeroSection from "@/components/me/hero";
import { Produits } from "@/components/me/produits";
import { Structures } from "@/components/me/structures";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Structures />
      <Produits />
    </main>
  );
}
