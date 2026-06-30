import { PersonalInfos } from "./personalInfos";
import { Item } from "./item";

export interface Pedido {
  personalInfos?: PersonalInfos;
  itens: Item[];
}
