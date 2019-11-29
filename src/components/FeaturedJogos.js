//react
import React, { Component } from 'react'

//criadas
import {JogoContext} from '../context'
import Loading from './Loading'
import Jogo from './Jogo'
import Title from './Title'


export default class DetalheJogos extends Component {
    static contextType = JogoContext
        render() {
            let{loading, detalheJogos: jogos} = this.context

            jogos = jogos.map(jogo => {
                return <Jogo key = {jogo.id} jogo={jogo}/>
            })

            return (
                <section className="featured-jogos">
                    <Title title ="Jogos em destaque" />
                    <div className="featured-jogos-center">
                        {loading?<Loading/>:jogos}
                    </div>
                </section>
            )
        }
}
