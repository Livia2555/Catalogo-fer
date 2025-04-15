import { BarraNavegacao } from "../assets/componentes/BarraNavegacao"
import { Cabecalho } from "../assets/componentes/Cabecalho"

// outlet é um espaço que serve para renderizar o componente da rota entao se clicar no link perfil vai exbir o componente que corresponde ao endereço perfil em rotas
import { Outlet } from "react-router-dom";

// estrutura
export function Inicial() {
    return (
        <>
            <Cabecalho />
            <BarraNavegacao/>
            <Outlet/>

        </>

    )
}