import estilos from './Card.module.css'

// precisamos colocar a estrutura para fazer o componente 
export function CardSerie({serie, onOpenModal}){
    return(
        <div className={estilos.conteiner}>
            <h3>{serie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} onClick={()=>onOpenModal(serie)}/>
            <p>{serie.overview}</p>
        </div>
    );

    
}