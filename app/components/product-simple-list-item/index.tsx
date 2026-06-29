import Image from "next/image";
import styles from "./style.module.css";
import { Product } from "@/app/types/product";

interface ProductSimpleListItemProps {
  productItem: Product;
}

export default function ProductSimpleListItem({
  productItem,
}: ProductSimpleListItemProps) {
  return (
    <div className={styles.listItem}>
      <Image
        src={productItem.image}
        width={160}
        height={120}
        alt={productItem.name}
        className={styles.imageOfProduct}
      />
      <div className={styles.contentContainer}>
        <h3>{productItem.name}</h3>
        <p>{productItem.description}</p>
        <span>
          {productItem.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
    </div>
  );
}
