"use client";
import styles from "./style.module.css";
import Image from "next/image";
import Buttom from "@/app/components/buttom";
import { Product } from "@/app/types/product";

interface CardProductProps extends Product {
  main?: boolean;
}

export default function CardProduct({
  name,
  description,
  price,
  image,
  main = false,
}: CardProductProps) {
  return (
    <div
      className={
        main ? styles.cardProductCotainer : styles.cardProductCotainerNoMain
      }
    >
      <div className={styles.headerContent}>
        <h3>{name}</h3>
        <p>{description}</p>
        <Buttom
          tagHtml={"button"}
          onClickButton={() => {}}
          text={"Fazer pedido"}
          type={"primary"}
          ariaLabel={"Fazer pedido"}
          direction="to-right"
        />
        <span className={styles.priceContainer}>
          {"R$ " + price.toString()}
        </span>
      </div>
      <Image
        className={styles.imageProductCard}
        src={image}
        width={520}
        height={350}
        alt={name}
      />
    </div>
  );
}
