//axios permite a comunicação com as paginas http (https)
import axios from "axios";
//as ferramentas começadas com use são hooks de manuseio da biblioteca React
import React, {useState, useEffect} from "react";
import { CardSerie } from './CardSerie';
import { ModalSerie } from './ModalSerie'; 
import estilos from './Lista.module.css';

const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';

export function ListaSerie(){
    //crio uma variavel chamada movie, e "seto" o estado dela como vazio
    const [serie, setSerie] = useState([]);

    // mostra se foi selecionado um filme para a visualização
    const  [SelectSerie,setSelectedSerie] = useState(null);
    
    //Efect trabalha com uma estruta especifica parametros (), script {}, e dependencias []

    useEffect(()=>{
        axios.get(`${API_URL}/tv/popular?api_key=${API_key}&language=pt-BR`)
            //se deu certo a comunicação, então grava o resultado no "response" que pode pegar elemento através do data
            .then(response =>{
                console.log(response.data.results);
                setSerie(response.data.results)
            })
            //se der ruim, exibe no inspecionar o erro de comunicação
            .catch(error =>{
                console.log('Error', error);
            });
    },[])

    const handleOpenModal = (serie)=>{
        setSelectedSerie(serie)
    }

    const handleCloseModal = ()=>{
        setSelectedSerie(null)
    }


    return(
        <div className={estilos.conteiner}>
            <figure style ={{display:'flex', flexWrap:'wrap'}}>
                {serie.map(serie=>(
                    <CardSerie key={serie.id}
                    serie={serie} 
                    onOpenModal = {handleOpenModal}/>
                    
                ))}
            </figure>
            {setSelectedSerie && (<ModalSerie serie={SelectSerie} onClose={handleCloseModal}/>)}
        </div>
    );
}