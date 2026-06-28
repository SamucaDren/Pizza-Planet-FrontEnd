"use client";
import { useState } from "react";
import styles from "./style.module.css";
import productsData from "@/app/data/products.json";
import { Product } from "@/app/types/product";
import CarouselProducts from "@/app/components/carousel-products";

export default function ListOfProducts() {
  const products: Product[] = productsData.products;

  return (
    <section className={styles.productsSectionContainer}>
      <div className={styles.headerProducts}>
        <span className="tag">Seu refúgio saboroso</span>
        <h2>Confira todas as nossas opções</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <CarouselProducts Products={products} />
    </section>
  );
}
