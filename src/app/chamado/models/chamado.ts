import { Funcionario } from "src/app/funcionarios/models/funcionario"

export interface Chamado {
    idChamado?: number
    titulo: string
    descrcao: string
    status: string
    dataEntrada: Date
    idFuncionario?: Funcionario
}