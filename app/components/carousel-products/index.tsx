"use client";
import { useState } from "react";
import { Product } from "@/app/types/product";
import CardProduct from "@/app/components/card-product";
import Buttom from "@/app/components/buttom";
import styles from "./style.module.css";

interface CarouselProductsProps {
  Products: Product[];
}

export default function CarouselProducts({ Products }: CarouselProductsProps) {
  const [indice, setIndice] = useState(0);

  function next() {
    setIndice((prev) => (prev + 1) % Products.length);
  }

  function prev() {
    setIndice((prev) => (prev === 0 ? Products.length - 1 : prev - 1));
  }

  return (
    <div className={styles.trackProductsCards}>
      <div className={styles.containerButton}>
        {indice !== 0 ? (
          <Buttom
            tagHtml={"seta"}
            type={"primary"}
            onClickButton={prev}
            className={styles.previous}
            direction="to-left"
          />
        ) : null}

        {indice !== Products.length - 1 ? (
          <Buttom
            tagHtml={"seta"}
            type={"primary"}
            onClickButton={next}
            className={styles.next}
            direction="to-right"
          />
        ) : null}
      </div>
      <div
        className={
          indice == 0
            ? styles.maskProductsContainerFirst
            : indice == Products.length - 1
              ? styles.maskProductsContainerEnd
              : styles.maskProductsContainer
        }
      >
        <div
          className={styles.productsContainer}
          style={{
            transform:
              indice !== 0 && indice !== 1
                ? `translateX(calc(0px - ${(indice - 1) * (240 + 24)}px + 104px))`
                : "translateX(0px)",
            transition: "transform 0.5s ease",
          }}
        >
          {Products.map((product) => (
            <CardProduct
              key={product.id}
              {...product}
              main={Products.findIndex((p) => p.id === product.id) === indice}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
