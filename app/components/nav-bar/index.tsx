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
  const [showResumeModal, setShowResumeModal] = useState<Pedido | null>(null);

  useEffect(() => {
    const isOverlayOpen =
      isOpenDrawerCarrinho ||
      showGetPersonalInfos !== null ||
      showResumeModal !== null;

    document.body.style.overflow = isOverlayOpen ? "hidden" : "";
    document.documentElement.style.overflow = isOverlayOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpenDrawerCarrinho, showGetPersonalInfos, showResumeModal]);

  return (
    <>
      {showResumeModal && (
        <ModalShowResume
          pedido={showResumeModal}
          onClose={() => setShowResumeModal(null)}
          onFinalizaPedido={(pedido) => {
            new PedidoService().finalizaPedidoFromCarrinho(pedido);
            setShowResumeModal(null);
          }}
        />
      )}
      {showGetPersonalInfos && (
        <ModalGetPersonalInfos
          pedido={showGetPersonalInfos}
          onClose={() => {
            setShowGetPersonalInfos(null);
          }}
          onFinish={(pedido) => {
            setShowGetPersonalInfos(null);
            setShowResumeModal(pedido);
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
