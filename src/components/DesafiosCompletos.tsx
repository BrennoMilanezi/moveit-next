import styles from '../styles/components/DesafiosCompletos.module.css';
import { DesafiosContext } from '../contexts/DesafiosContext';
import { useState, useEffect, useContext } from 'react';

export function DesafiosCompletos(){
    const { desafiosCompleted } = useContext(DesafiosContext)

    return (
        <div className={styles.desafiosCompletosContainer}>
            <span>Desafios completos</span>
            <span>{desafiosCompleted}</span>
        </div>
    )
}