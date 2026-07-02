"use client";
//import { Product } from "@/app/types/product";
//import { Pedido } from "@/app/types/pedido";
import { PedidoService } from "@/app/services/pedidoService";
//import { Item } from "@/app/types/item";
import { PersonalInfos } from "@/app/types/personalInfos";

export class PersonalInfoService {
  getPersonalInfos(): PersonalInfos[] {
    const pedidos = new PedidoService().getPedidosFinalizados();
    const personalInfos: PersonalInfos[] = [];

    for (const pedido of pedidos) {
      if (
        pedido.personalInfos &&
        !personalInfos.some(
          (info) =>
            JSON.stringify(info) === JSON.stringify(pedido.personalInfos),
        )
      ) {
        personalInfos.push(pedido.personalInfos);
      }
    }

    return personalInfos;
  }
}
