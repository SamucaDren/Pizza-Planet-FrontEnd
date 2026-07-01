import styles from "./style.module.css";
import { useState } from "react";
import { Product } from "@/app/types/product";
import { Pedido } from "@/app/types/pedido";
import { PersonalInfos } from "@/app/types/personalInfos";
import ProductSimpleListItem from "@/app/components/product-simple-list-item";
import Input from "@/app/components/input";
import Buttom from "@/app/components/buttom";

interface ModalGerPersonalInfosProps {
  pedido: Pedido;
  onClose: () => void;
  onFinish: (pedido: Pedido) => void;
}

export default function ModalGerPersonalInfos({
  pedido,
  onClose,
  onFinish,
}: ModalGerPersonalInfosProps) {
  const [personalInfos, setPersonalInfos] = useState<PersonalInfos>({
    nome: "",
    telefone: "",
    observacao: "",
  });

  const [erroMessageName, setErroMessageName] = useState<string>("");
  const [erroMessageTel, setErroMessageTel] = useState<string>("");

  const handleEndBuy = () => {
    if (personalInfos.nome === "") {
      setErroMessageName("Preencha o campo de nome");
      return;
    } else {
      setErroMessageName("");
    }

    if (personalInfos.telefone === "") {
      setErroMessageTel("Não vamos roubar seus dados, confia ;)");
      return;
    } else {
      setErroMessageTel("");
    }

    onFinish({ ...pedido, personalInfos: personalInfos });
  };

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
            <h2>Apenas mais algumas informações</h2>
          </div>

          {/*  <div className={styles.line}></div><ProductSimpleListItem productItem={productItem} />*/}

          <div className={styles.line}></div>
          <div className={styles.inputsContainer}>
            <Input
              name="nome"
              value={personalInfos.nome}
              showLabel
              labelText="Nome:"
              typeInput="text"
              errorMessage={erroMessageName}
              onAddContent={(value) =>
                setPersonalInfos((prev) => ({
                  ...prev,
                  nome: value,
                }))
              }
            />

            <Input
              name="telefone"
              value={personalInfos.telefone}
              showLabel
              labelText="Telefone:"
              typeInput="tel"
              errorMessage={erroMessageTel}
              onAddContent={(value) =>
                setPersonalInfos((prev) => ({
                  ...prev,
                  telefone: value,
                }))
              }
            />

            <Input
              name="observacao"
              value={personalInfos.observacao}
              showLabel
              labelText="Observação: (opcional)"
              typeInput="text"
              isBox
              heightOfBox={104}
              onAddContent={(value) =>
                setPersonalInfos((prev) => ({
                  ...prev,
                  observacao: value,
                }))
              }
            />
          </div>
          <Buttom
            tagHtml={"button"}
            onClickButton={handleEndBuy}
            text={"Finalizar Pedido"}
            type={"primary"}
            ariaLabel={"Cotinuar o pedido"}
            direction="to-right"
            className={styles.buttonModal}
          />
        </div>
      </div>
    </div>
  );
}
