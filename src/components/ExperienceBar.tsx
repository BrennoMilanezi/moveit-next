import styles from '../styles/components/ExperienceBar.module.css';
import { DesafiosContext } from '../contexts/DesafiosContext';
import { useState, useEffect, useContext } from 'react';

export function ExperienceBar() {

    const { currentExperience, experienceToNextLevel } = useContext(DesafiosContext)

    const percetToNextLevel = Math.round(currentExperience*100)/experienceToNextLevel

    return (
        <header className={styles.experienceBar}>
            <span>0 px</span>
            <div>
                <div style={{ width: percetToNextLevel+'%' }} ></div>
                <span className={styles.currentExperience} style={{ left: percetToNextLevel+'%' }}>
                    {currentExperience} px
                </span>
            </div>
            <span>{experienceToNextLevel} px</span>
        </header>
    );
}