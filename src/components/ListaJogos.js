import React from 'react'

import Jogo from './Jogo'

export default function ListaJogos({jogos}) {

    if (jogos.length === 0) {
        return (
            <h3>Nenhum jogo encontrado</h3>
        )
    }

    return (
        <section className="jogoslist">
            <div className="jogoslist-center">
                {
                    jogos.map(item => {
                        return (
                            <Jogo key={item.id} jogo={item} />
                        )
                    })
                }
            </div>
        </section>
    )
}
