import styles from "./style.module.css";
import { Product } from "@/app/types/product";

import { Pedido } from "@/app/types/pedido";
import { PersonalInfos } from "@/app/types/personalInfos";
import ProductSimpleListItem from "@/app/components/product-simple-list-item";
import PersonalInfosListItem from "@/app/components/personal-infos-list-item";
import Buttom from "@/app/components/buttom";

interface ModalShowResumeProps {
  pedido: Pedido;
  onClose: () => void;
}

export default function ModalShowResume({
  pedido,
  onClose,
}: ModalShowResumeProps) {
  return (
    <div onClick={onClose} className={styles.bodyBackgroundModal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.modalContainer}
      >
        <button className={styles.closeButton} onClick={onClose}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 8.48528L8.48528 0L9.8995 1.41421L1.41421 9.8995L0 8.48528Z" />
            <path d="M0 1.41424L8.48528 9.89952L9.8995 8.4853L1.41421 2.2769e-05L0 1.41424Z" />
          </svg>
        </button>
        <div className={styles.contentContainer}>
          <div className={styles.modalHeader}>
            <span className="tag">Seu refúgio saboroso</span>
            <h2>Seu pedido foi confirmado</h2>
          </div>
          <div className={styles.line}></div>
          <PersonalInfosListItem personalInfos={pedido.personalInfos!} />
          <div className={styles.line}></div>
          {pedido.itens.map((item) => (
            <ProductSimpleListItem
              key={item.product.id}
              productItem={item.product}
            />
          ))}

          <div className={styles.line}></div>

          <Buttom
            tagHtml={"button"}
            onClickButton={onClose}
            text={"Finalizar Pedido"}
            type={"primary"}
            ariaLabel={"Finalizar Pedido"}
            direction="to-right"
            withSeta={false}
            className={styles.buttonModal}
          />
        </div>
      </div>
    </div>
  );
}
