//react
import React from 'react'
import {Link} from 'react-router-dom'

//Criadas
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import JogoConteiner from '../components/JogoConteiner'

const Jogos = () =>{
	return(
		<>
			<Hero hero="jogosHero">
				<Banner title="Confira os jogos educativos">
					<Link to='/' className="btn-primary">Inicio</Link>
				</Banner>
			</Hero>
			<JogoConteiner/>
		</>
	)
}

export default Jogos