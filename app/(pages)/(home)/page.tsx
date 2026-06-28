import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/app/sections/hero-section";
import ListOfPrducts from "@/app/sections/list-of-products";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ListOfPrducts />
    </>
  );
}
