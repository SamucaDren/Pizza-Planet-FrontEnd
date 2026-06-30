"use client";
import { Product } from "@/app/types/product";
import { Pedido } from "@/app/types/pedido";
//import { Item } from "@/app/types/item";
//import { PersonalInfos } from "@/app/types/personalInfos";

export class PedidoService {
  getPedido(): Pedido {
    if (typeof window === "undefined") {
      return { itens: [] };
    }

    const pedido = localStorage.getItem("pedido");

    if (!pedido) {
      return { itens: [] };
    }

    return JSON.parse(pedido);
  }

  savePedido(pedido: Pedido) {
    localStorage.setItem("pedido", JSON.stringify(pedido));
  }

  addProduto(produto: Product) {
    const pedido = this.getPedido();

    const item = pedido.itens.find((i) => i.product.id === produto.id);

    if (item) {
      item.quantidade++;
    } else {
      pedido.itens.push({
        product: produto,
        quantidade: 1,
      });
    }

    this.savePedido(pedido);
  }
}
