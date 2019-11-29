//react
import React, { Component } from 'react'
import {FaBook,FaRegSmileBeam} from 'react-icons/fa'
import {GiMultipleTargets,GiTalk} from 'react-icons/gi'
import {MdFindReplace} from 'react-icons/md'
import {TiGroup} from 'react-icons/ti'

//Criadas
import Title from './Title.js'

export default class Services extends Component {
    //icones e seus detalhes

    state={
        vatagens:[
            {
                icon:<FaBook />,
                title:"Aprendizado dinâmico",
                info:'Sobre aprender sem livros'
            },
            {
                icon:<FaRegSmileBeam />,
                title:"Aprendizado divertido",
                info:'Sobre gostar de aprender'
            },
            {
                icon:<GiMultipleTargets />,
                title:"Tarefas simultâneas",
                info:'Realizar varias atividades simultâneas'
            },
            {
                icon:<GiTalk />,
                title:"Desenvolver comunicação",
                info:'Desenvolve relacionamentos e conversação'
            },
            {
                icon:<MdFindReplace />,
                title:"Tomada de decisão",
                info:'Definir o objetivo com sentido'
            },
            {
                icon:<TiGroup />,
                title:"Trabalho em grupo",
                info:'Aprender a trabalhar em equipe e valorizar a união'
            },
        ]
    }


    render() {
        return (
            <section className="vantagens">
                <h4>Como os jogos podem ajudar?" </h4>
                <div className="vantagens-center">
                    {this.state.vatagens.map((item,index) => {
                        return <article key={index} className="vantagens">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
