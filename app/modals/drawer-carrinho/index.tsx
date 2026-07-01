"use client";
import styles from "./style.module.css";
import Buttom from "@/app/components/buttom";
import ProductCarrinhoListItem from "@/app/components/product-carrinho-list-item";
import { PedidoService } from "@/app/services/pedidoService";
import { useState } from "react";

interface DrawerCarrinhoProps {
  onClose?: () => void;
}

export default function DrawerCarrinho({ onClose }: DrawerCarrinhoProps) {
  const [pedido, setPedido] = useState(() => new PedidoService().getPedido());

  const atualizarPedido = () => {
    setPedido(new PedidoService().getPedido());
  };

  const total = () => {
    let t = 0;
    for (const item of pedido.itens) {
      t = t + item.product.price * item.quantidade;
    }
    return t;
  };

  return (
    <div onClick={onClose} className={styles.bodyBackgroundModal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.drawerContainer}
      >
        <div className={styles.headerContainer}>
          <span className="tag">Seu refúgio saboroso</span>
          <h2>Seu carrinho</h2>
        </div>
        <div className={styles.mainContentGap}>
          <div className={styles.itemsCotainer}>
            {pedido.itens.map((item, index) => (
              <>
                <ProductCarrinhoListItem
                  key={item.product.id}
                  item={item}
                  triggerUpdateTotal={atualizarPedido}
                />
                {index < pedido.itens.length - 1 && (
                  <div className={styles.line}></div>
                )}
              </>
            ))}
          </div>
          <div className={styles.totalContainer}>
            <span className={styles.totalLabel}>Total do pedido:</span>
            <span className={styles.totalValue}>
              {total().toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
        </div>
        <div className={styles.btnCotainers}>
          <Buttom
            tagHtml="button"
            onClickButton={() => {}}
            text="Finalizar pedido"
            type="primary"
            withSeta={false}
          />
          <Buttom
            tagHtml="button"
            onClickButton={onClose}
            text="Continuar comprando"
            type="secondary"
            withSeta={false}
          />
        </div>
      </div>
    </div>
  );
}
