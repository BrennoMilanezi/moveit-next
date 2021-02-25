import styles from '../styles/components/Perfil.module.css';
import { useContext } from 'react';
import { DesafiosContext } from '../contexts/DesafiosContext';

export function Perfil(){
    const { level } = useContext(DesafiosContext)
    return (
        <div className={styles.perfilContainer}>
            <img src="https://github.com/BrennoMilanezi.png" alt="Brenno Milanezi" />
            <div>
                <strong>Brenno Milanezi</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}