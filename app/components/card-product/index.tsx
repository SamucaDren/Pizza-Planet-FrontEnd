"use client";

import styles from "./style.module.css";
import Image from "next/image";
import Buttom from "@/app/components/buttom";

import { Product } from "@/app/types/product";

interface CardProductProps extends Product {
  main?: boolean;
  openModal: (itemProduct: Product) => void;
}

export default function CardProduct({
  id,
  name,
  description,
  price,
  image,
  main = false,
  openModal,
}: CardProductProps) {
  const productItem: Product = {
    id,
    name,
    description,
    price,
    image,
  };

  return (
    <div
      className={
        main ? styles.cardProductCotainer : styles.cardProductCotainerNoMain
      }
    >
      <div className={styles.headerContent}>
        <h3>{name}</h3>
        <p>{description}</p>
        <span className={styles.priceContainer}>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <Buttom
          tagHtml={"button"}
          onClickButton={() => {
            openModal(productItem);
          }}
          text={"Fazer pedido"}
          type={"primary"}
          ariaLabel={"Fazer pedido"}
          direction="to-right"
          className={styles.buttonFazerPedido}
        />
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
