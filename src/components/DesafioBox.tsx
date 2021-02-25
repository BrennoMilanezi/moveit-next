import { useContext } from 'react';
import { DesafiosContext } from '../contexts/DesafiosContext';
import { TempoContext } from '../contexts/TempoContext';
import styles from '../styles/components/DesafioBox.module.css';

export function DesafioBox(){
    const { ativarDesafio, resetDesafio, completedDesafio } = useContext(DesafiosContext)
    const { fimCiclo } = useContext(TempoContext)

    function handleDesafioSucesso(){
        completedDesafio();
        fimCiclo();
    }

    function handleDesafioFailed(){
        resetDesafio();
        fimCiclo();
    }

    return (
        <div className={styles.desafioBoxContainer}>
            { ativarDesafio ? (
                <div className={styles.desafioBoxAtivo}>
                    <header>Ganhe {ativarDesafio.amount} xp</header>
                    <main>
                        <img src={'icons/'+ativarDesafio.type+'.svg'}/>
                        <strong>Novo desafio</strong>
                        <p>{ativarDesafio.description}</p>
                    </main>
                    <footer>
                        <button type="button" onClick={handleDesafioFailed} className={styles.desafioFailledBotao}>
                            Falhei
                        </button>
                        <button type="button" onClick={handleDesafioSucesso} className={styles.desafioSucessoBotao}>
                            Completei
                        </button>
                    </footer>
                </div>
            ) :
            (
            <div className={styles.desafioBoxNaoAtivo}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up" />
                    Avance de level completando desafios.
                </p>
            </div>
            )}
        </div>
    )
}