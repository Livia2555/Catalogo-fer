import estilos from './Modal.module.css';

export function Modal({movie, onClose}){
    // se clicado fora de um card nao quero que o codico seja executado 
    if(!movie){
        return null;
    }
    console.log("Modal renderizada");
    console.log(movie);

    return(
        <div className={estilos.modalback}>
            <div className={estilos.modelConteiner}>
                <div className={estilos.modelHeader}>
                    <h2>{movie.title}</h2>
                    <button onClick={onClose}>X</button>
                </div>
                <div className={estilos.imgDetails}>
                    <img className={estilos.imgModal} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>

                    <ul className={estilos.movieDetails}>
                        <li>{`Popularidade: ${movie.popularity ?? `nao disponivel no momento agaurde, aguarde`}`}</li>
                        <li>{`Data de Lançamento: ${movie.realise_date}`}</li>
                        <li>{`Quantidade de votos: ${movie.vote_count}`}</li>
                        <li>{`Sinopse: ${movie.overview}`}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}