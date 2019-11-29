import React from 'react'

//criadas
import FiltroJogos from './FiltroJogos'
import ListaJogos from './ListaJogos'
import { withJogoConsumer } from '../context'
import Loading from './Loading'

function JogoConteiner({ context }) {
    const { loading, sortedGames, jogos } = context
    if (loading) {
        return <Loading />
    }

    return (
        <>
            <FiltroJogos jogos={jogos} />
            <ListaJogos jogos={sortedGames} />
        </>
    )
}

export default withJogoConsumer(JogoConteiner)
