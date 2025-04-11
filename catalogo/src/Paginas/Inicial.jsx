import { BarraNavegacao } from "../assets/componentes/BarraNavegacao";
import { Cabecalho } from "../assets/componentes/Cabecalho";
import { Conteudo } from "../assets/componentes/Conteudo";

// estrutura
export function Inicial() {
    return (
        <>
            <Cabecalho />
            <BarraNavegacao/>
            <Conteudo/>

        </>

    )
}