import estilos from './Modal.module.css';

export function Modal({serie, onClose}){
    // se clicado fora de um card nao quero que o codico seja executado 
    if(!serie){
        return null;
    }
    console.log("Modal renderizada");
    console.log(serie);

    return(
        <div className={estilos.modalback}>
            <div className={estilos.modelConteiner}>
                <div className={estilos.modelHeader}>
                    <h2>{serie.title}</h2>
                    <button onClick={onClose}>X</button>
                </div>
                <div className={estilos.imgDetails}>
                    <img className={estilos.imgModal} src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} alt={serie.title}/>

                    <ul className={estilos.serieDetails}>
                        <li>{`Popularidade: ${serie.popularity ?? `nao disponivel no momento agaurde, aguarde`}`}</li>
                        <li>{`Data de Lançamento: ${serie.realise_date}`}</li>
                        <li>{`Quantidade de votos: ${serie.vote_count}`}</li>
                        <li>{`Sinopse: ${serie.overview}`}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}