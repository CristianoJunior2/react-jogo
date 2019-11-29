//React
import React from 'react'
import {Link} from 'react-router-dom'

//Criadas
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import FeaturedJogos from '../components/FeaturedJogos'


export default function Home () {
	return(
		<>
			<Hero>
				<Banner title="Jogos educativos" subtitle="Como aprender com os jogos">
				<Link to="/jogos" className="btn-primary">Confira alguns exemplos</Link>
				</Banner>
			</Hero>
			<Services />
			<FeaturedJogos />
		</>
	)
}
