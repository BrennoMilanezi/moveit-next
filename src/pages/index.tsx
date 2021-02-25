import { DesafiosCompletos } from '../components/DesafiosCompletos';
import { ExperienceBar } from '../components/ExperienceBar';
import { Perfil } from '../components/Perfil';
import { TempoDesafio } from '../components/TempoDesafio';
import { DesafioBox } from '../components/DesafioBox';
import { TempoProvider } from '../contexts/TempoContext'

import Head from 'next/head'

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />
      
      <TempoProvider>
        <section>
          <div>
            <Perfil />
            <DesafiosCompletos />
            <TempoDesafio />
          </div>
          <div>
            <DesafioBox />
          </div>
        </section>
      </TempoProvider>
    </div>
  )
}
