import { Product } from "./product";

export interface Item {
  product: Product;
  quantidade: number;
  type?: "P" | "M" | "G";
}
