import styles from "./style.module.css";
import Buttom from "@/app/components/buttom";

interface DrawerCarrinhoProps {
  onClose?: () => void;
}

export default function DrawerCarrinho({ onClose }: DrawerCarrinhoProps) {
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
        <div className={styles.itemsCotainer}></div>
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
