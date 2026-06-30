"use client";
import styles from "./style.module.css";
import Buttom from "@/app/components/buttom";
import ProductSimpleListItem from "@/app/components/product-simple-list-item";
import { PedidoService } from "@/app/services/pedidoService";
import { Product } from "@/app/types/product";
import { Item } from "@/app/types/item";

interface DrawerCarrinhoProps {
  onClose?: () => void;
}

export default function DrawerCarrinho({ onClose }: DrawerCarrinhoProps) {
  const pedido = new PedidoService();

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
        <div className={styles.itemsCotainer}>
          {pedido.getPedido().itens.map((item) => (
            <ProductSimpleListItem
              key={item.product.id}
              productItem={item.product}
            />
          ))}
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
