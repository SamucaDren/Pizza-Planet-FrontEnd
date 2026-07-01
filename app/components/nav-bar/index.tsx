"use client";
import styles from "./style.module.css";
import { useState, useEffect } from "react";

import Image from "next/image";
//import Link from "next/link";
//import Buttom from "@/app/components/buttom";
import CarrinhoButton from "@/app/components/carrinho-button";
import DrawerCarrinho from "@/app/modals/drawer-carrinho";
import { PedidoService } from "@/app/services/pedidoService";
import ModalGetPersonalInfos from "@/app/modals/get-personal-infos";
import ModalShowResume from "@/app/modals/show-resume";
import { Pedido } from "@/app/types/pedido";

export default function NavBar() {
  const [isOpenDrawerCarrinho, setIsOpenDrawerCarrinho] =
    useState<boolean>(false);
  const [showGetPersonalInfos, setShowGetPersonalInfos] =
    useState<Pedido | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpenDrawerCarrinho ? "hidden" : "";
    document.documentElement.style.overflow = isOpenDrawerCarrinho
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpenDrawerCarrinho]);

  return (
    <>
      {showGetPersonalInfos && (
        <ModalGetPersonalInfos
          pedido={showGetPersonalInfos}
          onClose={() => {
            setShowGetPersonalInfos(null);
          }}
          onFinish={(pedido) => {
            //setPedido(pedido);
            //setProductModalisOpen(null);
            //setShowModalModalIsOpen(true);
          }}
        />
      )}
      {isOpenDrawerCarrinho && (
        <DrawerCarrinho
          onFinalizaPedido={(pedido) => {
            setIsOpenDrawerCarrinho(false);
            setShowGetPersonalInfos(pedido);
          }}
          onClose={() => {
            setIsOpenDrawerCarrinho(false);
          }}
        />
      )}
      <nav className={styles.navBarContainer}>
        <Image src="/logo.svg" width={185} height={34} alt={""} />
        {/*       <div className={styles.linksContainerNavBar}>
        <Link href="/">Exemplo</Link>
        <Link href="/">Exemplo</Link>
        <Link href="/">Exemplo</Link>
      </div>

      <Buttom
        tagHtml="url"
        text="Fazer pedido"
        ariaLabel="Relizar pedido"
        type="secondary"
        direction="to-right"
        withSeta={false}
        href="/"
      />*/}
        <CarrinhoButton
          itemsCounter={new PedidoService().getPedido().itens.length || 0}
          onClickButton={() => setIsOpenDrawerCarrinho(true)}
        />
      </nav>
    </>
  );
}
