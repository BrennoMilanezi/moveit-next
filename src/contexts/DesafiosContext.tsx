import { createContext, useState, ReactNode, useEffect } from 'react'
import desafios from '../../challenges.json'
import { DesafioBox } from '../components/DesafioBox';

interface Desafio {
    type: 'body' | 'eye',
    description: string,
    amount: number
}

interface DesafiosContextData {
    level: number, 
    currentExperience: number, 
    desafiosCompleted: number, 
    LevelUp: () => void, 
    iniciaNovoDesafio: () => void, 
    ativarDesafio: Desafio,
    resetDesafio: () => void, 
    experienceToNextLevel: number,
    completedDesafio: () => void, 
}

interface DesafiosProviderProps {
    children: ReactNode;
}

export const DesafiosContext = createContext({} as DesafiosContextData)

export function DesafiosProvider({ children }: DesafiosProviderProps){
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [desafiosCompleted, setDesafiosCompleted] = useState(0);

    const [ativarDesafio, setAtivarDesafio] = useState(null); 

    const experienceToNextLevel = Math.pow((level+1)*4,2)

    useEffect(() => {
        Notification.requestPermission();
    }, [])

    function LevelUp(){
        setLevel(level+1)
    }

    function iniciaNovoDesafio(){
        const randomDesafioIndex = Math.floor(Math.random() * desafios.length)
        const desafio = desafios[randomDesafioIndex]
        setAtivarDesafio(desafio)

        new Audio('/notification.mp3').play();

        if(Notification.permission === 'granted'){
            new Notification('Novo desafio 🎉', {
                body: 'Valendo '+desafio.amount+' xp!'
            })
        }
    }

    function resetDesafio(){
        setAtivarDesafio(null)
    }

    function completedDesafio(){
        if(!ativarDesafio){
            return;
        }

        const { amount } = ativarDesafio;

        let finalExperience = currentExperience + amount;

        if(finalExperience >= experienceToNextLevel){
            LevelUp();
            finalExperience = finalExperience - experienceToNextLevel;
        }

        setCurrentExperience(finalExperience);
        setAtivarDesafio(null);
        setDesafiosCompleted(desafiosCompleted + 1);

    }

    return (
        <DesafiosContext.Provider value={{ 
            level, 
            currentExperience, 
            desafiosCompleted, 
            LevelUp, 
            iniciaNovoDesafio,
            ativarDesafio,
            resetDesafio,
            experienceToNextLevel,
            completedDesafio }}>
            {children}
        </DesafiosContext.Provider>
    )
}