//React
import React from 'react'
import {Link} from 'react-router-dom'

//Criadas
import Hero from '../components/Hero'
import Banner from '../components/Banner'

export default function Erro() {
    return (
        <Hero>
            <Banner title="Desculpe" subtitle="Essa página não pode ser encontrada :(">
                <Link to='/' className="btn-primary">Voltar</Link>
            </Banner>
        </Hero>
    )
}
