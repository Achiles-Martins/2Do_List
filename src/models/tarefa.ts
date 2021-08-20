import { Prioridade } from "./prioridade";

export interface Tarefa {
    feita: boolean,
    texto: string,
    prioridade?: Prioridade
}