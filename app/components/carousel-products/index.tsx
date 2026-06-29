"use client";
import { useEffect, useState } from "react";
import { Product } from "@/app/types/product";
import { PersonalInfos } from "@/app/types/personalInfos";
import CardProduct from "@/app/components/card-product";
import Buttom from "@/app/components/buttom";
import ModalGetPersonalInfos from "@/app/modals/get-personal-infos";
import ModalShowResume from "@/app/modals/show-resume";
import styles from "./style.module.css";

interface CarouselProductsProps {
  Products: Product[];
}

export default function CarouselProducts({ Products }: CarouselProductsProps) {
  const [productModalisOpen, setProductModalisOpen] = useState<Product | null>(
    null,
  );
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState(false);
  const [pedido, setPedido] = useState<{
    product: Product;
    personalInfos: PersonalInfos;
  } | null>(null);
  const [indice, setIndice] = useState(0);

  const calcMeioCarrossel = `translateX(calc(0px - ${indice * (240 + 24)}px - 24px + calc(min(1232px, 100vw)/2) - calc(min(520px, 100vw - 48px)/2))`;
  const calcEndCarrossel = `translateX(calc(0px - ${(Products.length - 1) * (240 + 24)}px + calc(min(1232px, 100vw - 80px)) - 520px))`;
  const calcStartCarrossel = "translateX(0px)";

  const moveSlideDesktop =
    indice === 0 || indice === 1
      ? calcStartCarrossel
      : indice === Products.length - 1 || indice === Products.length - 2
        ? calcEndCarrossel
        : calcMeioCarrossel;

  useEffect(() => {
    document.body.style.overflow = productModalisOpen ? "hidden" : "";
    document.documentElement.style.overflow = productModalisOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [productModalisOpen]);

  function next() {
    setIndice((prev) => (prev + 1) % Products.length);
  }

  function prev() {
    setIndice((prev) => (prev === 0 ? Products.length - 1 : prev - 1));
  }

  return (
    <>
      {productModalisOpen && (
        <ModalGetPersonalInfos
          productItem={productModalisOpen}
          onClose={() => {
            setProductModalisOpen(null);
          }}
          onFinish={(product, infos) => {
            setPedido({
              product,
              personalInfos: infos,
            });

            setProductModalisOpen(null);
            setConfirmModalIsOpen(true);
          }}
        />
      )}
      {confirmModalIsOpen && pedido && (
        <ModalShowResume
          productItem={pedido.product}
          personalInfos={pedido.personalInfos}
          onClose={() => setConfirmModalIsOpen(false)}
        />
      )}
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
            style={
              {
                "--moveSlideDesktop": moveSlideDesktop,
                "--moveSlideMobile": calcMeioCarrossel,
              } as React.CSSProperties
            }
          >
            {Products.map((product) => (
              <CardProduct
                key={product.id}
                {...product}
                main={Products.findIndex((p) => p.id === product.id) === indice}
                openModal={(product) => setProductModalisOpen(product)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
