import { useState, useEffect, useContext } from 'react';
import { DesafiosContext } from '../contexts/DesafiosContext';
import { TempoContext } from '../contexts/TempoContext';
import styles from '../styles/components/TempoDesafio.module.css';

let tempoDesafioTimeOut: NodeJS.Timeout

export function TempoDesafio(){

    const { minutos, segundos, finalizado, ativar, inicioCiclo, fimCiclo } = useContext(TempoContext)

    const [minutoEsquerdo, minutoDireito] = String(minutos).padStart(2, '0').split('');
    const [segundoEsquerdo, segundoDireito] = String(segundos).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.tempoDesafioContainer}>
                <div>
                    <span>{minutoEsquerdo}</span>
                    <span>{minutoDireito}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{segundoEsquerdo}</span>
                    <span>{segundoDireito}</span>
                </div>
            </div>
            { finalizado ? (
                <button disabled type="button" className={styles.tempoDesafiosBotao}>
                    Ciclo encerrado
                </button>
            ) : (<>
            { ativar ? (
                <button type="button" onClick={fimCiclo} className={` ${styles.tempoDesafiosBotao} ${styles.tempoDesafiosBotaoAtivar} `}>
                    Abandonar ciclo
                </button>
            ) : (
                <button type="button" onClick={inicioCiclo} className={styles.tempoDesafiosBotao}>
                    Iniciar um clico
                </button> 
            ) }
            </>) }
        </div>
    )
}