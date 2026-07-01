"use client";
import { PedidoService } from "@/app/services/pedidoService";
import Image from "next/image";
import styles from "./style.module.css";
import { useState } from "react";
import { Item } from "@/app/types/item";

interface ProductCarrinhoListItemProps {
  item: Item;
  triggerUpdateTotal?: () => void;
}

export default function ProductCarrinhoListItem({
  item,
  triggerUpdateTotal,
}: ProductCarrinhoListItemProps) {
  const [quantidade, setQuantidade] = useState(item.quantidade);
  const pedidoService = new PedidoService();

  return (
    <div className={styles.listItem}>
      <Image
        src={item.product.image}
        width={160}
        height={120}
        alt={item.product.name}
        className={styles.imageOfProduct}
      />
      <div className={styles.contentContainer}>
        <h3>{item.product.name}</h3>
        <p>{item.product.description}</p>
        <div className={styles.priceContainer}>
          <span>
            {item.product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <span className={styles.editContainer}>
            <span className={styles.quantidadeContainer}>
              <button
                onClick={() => {
                  setQuantidade(quantidade - 1);
                  pedidoService.removeProduto(item.product);
                  triggerUpdateTotal?.();
                }}
                disabled={quantidade === 1}
              >
                -
              </button>
              <span className={styles.quantidadeValue}>{quantidade}</span>
              <button
                onClick={() => {
                  setQuantidade(quantidade + 1);
                  pedidoService.addProduto(item.product);
                  triggerUpdateTotal?.();
                }}
              >
                +
              </button>
            </span>
            <button
              onClick={() => {
                pedidoService.removeItemByProduto(item.product);
                triggerUpdateTotal?.();
              }}
              className={styles.removeItemButtom}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.25 4.5C20.6642 4.5 21 4.83579 21 5.25C21 5.66421 20.6642 6 20.25 6H3.75C3.33579 6 3 5.66421 3 5.25C3 4.83579 3.33579 4.5 3.75 4.5H20.25Z" />
                <path d="M9 15.75V9.75C9 9.33579 9.33579 9 9.75 9C10.1642 9 10.5 9.33579 10.5 9.75V15.75C10.5 16.1642 10.1642 16.5 9.75 16.5C9.33579 16.5 9 16.1642 9 15.75Z" />
                <path d="M13.5 15.75V9.75C13.5 9.33579 13.8358 9 14.25 9C14.6642 9 15 9.33579 15 9.75V15.75C15 16.1642 14.6642 16.5 14.25 16.5C13.8358 16.5 13.5 16.1642 13.5 15.75Z" />
                <path d="M4.5 19.5V5.25C4.5 4.83579 4.83579 4.5 5.25 4.5C5.66421 4.5 6 4.83579 6 5.25V19.5H18V5.25C18 4.83579 18.3358 4.5 18.75 4.5C19.1642 4.5 19.5 4.83579 19.5 5.25V19.5C19.5 19.8978 19.3419 20.2792 19.0605 20.5605C18.7792 20.8419 18.3978 21 18 21H6C5.60218 21 5.22076 20.8419 4.93945 20.5605C4.65815 20.2792 4.5 19.8978 4.5 19.5Z" />
                <path d="M15 5.25V3.75C15 3.55109 14.9209 3.36038 14.7803 3.21973C14.6396 3.07907 14.4489 3 14.25 3H9.75C9.55109 3 9.36038 3.07907 9.21973 3.21973C9.07907 3.36038 9 3.55109 9 3.75V5.25C9 5.66421 8.66421 6 8.25 6C7.83579 6 7.5 5.66421 7.5 5.25V3.75C7.5 3.15326 7.73722 2.58114 8.15918 2.15918C8.58114 1.73722 9.15326 1.5 9.75 1.5H14.25C14.8467 1.5 15.4189 1.73722 15.8408 2.15918C16.2628 2.58114 16.5 3.15326 16.5 3.75V5.25C16.5 5.66421 16.1642 6 15.75 6C15.3358 6 15 5.66421 15 5.25Z" />
              </svg>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
