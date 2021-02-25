import { createContext, useState, ReactNode, useEffect, useContext } from 'react'
import { TempoDesafio } from '../components/TempoDesafio';
import { DesafiosContext } from '../contexts/DesafiosContext';

interface TempoContextData {
    minutos: number,
    segundos: number,
    finalizado: boolean,
    ativar: boolean,
    inicioCiclo: () => void, 
    fimCiclo: () => void, 
}

interface TempoProviderProps {
    children: ReactNode;
}

export const TempoContext = createContext({} as TempoContextData)

let tempoDesafioTimeOut: NodeJS.Timeout

export function TempoProvider({ children }: TempoProviderProps){

    const { iniciaNovoDesafio } = useContext(DesafiosContext)

    const [time, setTime] = useState(1 * 2)
    const [ativar, setAtivar] = useState(false)
    const [finalizado, setFinalizado] = useState(false)

    const minutos = Math.floor(time / 60);
    const segundos = (time % 60);

    function inicioCiclo(){
        setAtivar(true);
    }

    function fimCiclo(){
        clearTimeout(tempoDesafioTimeOut)
        setAtivar(false);
        setFinalizado(false);
        setTime(1 * 2);
    }

    useEffect(() => {
        if(ativar && time > 0){
            tempoDesafioTimeOut = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }else if(ativar && time === 0) {
            setFinalizado(true);
            setAtivar(false);
            iniciaNovoDesafio();
        }
    }, 
    [ativar, time])

    return (
        <TempoContext.Provider value={{
           minutos,
           segundos,
           finalizado,
           ativar,
           inicioCiclo,
           fimCiclo
        }}>
            {children}
        </TempoContext.Provider>
    )
}