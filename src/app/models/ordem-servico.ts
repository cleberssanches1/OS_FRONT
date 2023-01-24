import { Cliente } from "./cliente";
import { Tecnico } from "./tecnico";

export interface OrdemServico{
    id? : any;
    dataAbertura?: any;
    dataFechamento?: any;
    prioridade : any;
    status : any;
    observacoes : String;
    tecnicoObject? : Tecnico;
    clienteObject? : Cliente;
    tecnico : any;
    cliente : any; 
}
 