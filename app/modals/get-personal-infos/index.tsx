import styles from "./style.module.css";
import { Product } from "@/app/types/product";
import ProductSimpleListItem from "@/app/components/product-simple-list-item";
import Input from "@/app/components/input";
import Buttom from "@/app/components/buttom";

interface ModalGerPersonalInfosProps {
  productItem: Product;
  onClose: () => void;
}

export default function ModalGerPersonalInfos({
  productItem,
  onClose,
}: ModalGerPersonalInfosProps) {
  return (
    <div onClick={onClose} className={styles.bodyBackgroundModal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.modalContainer}
      >
        <div className={styles.modalHeader}>
          <span className="tag">Seu refúgio saboroso</span>
          <h2>Apenas mais algumas informações</h2>
        </div>
        <div className={styles.line}></div>
        <ProductSimpleListItem productItem={productItem} />
        <div className={styles.line}></div>
        <div className={styles.inputsContainer}>
          <Input
            name={"nome"}
            showLabel={true}
            labelText={"Nome:"}
            typeInput={"text"}
            onAddContent={(value) => {}}
          />
          <Input
            name={"telefone"}
            showLabel={true}
            labelText={"telefone:"}
            typeInput={"tel"}
            onAddContent={(value) => {}}
          />
          <Input
            name={"observação"}
            showLabel={true}
            labelText={"Observação:"}
            typeInput={"text"}
            onAddContent={(value) => {}}
            isBox={true}
            heightOfBox={168}
          />
        </div>
        <Buttom
          tagHtml={"button"}
          onClickButton={() => {}}
          text={"Finalizar Pedido"}
          type={"primary"}
          ariaLabel={"Finalizar Pedido"}
          direction="to-right"
        />
      </div>
    </div>
  );
}
