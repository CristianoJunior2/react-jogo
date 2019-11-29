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
			<Hero hero="dicasHero">
				<Banner title="Confira dicas de como usar os jogos a educação">
					<Link to='/' className="btn-primary">Inicio</Link>
				</Banner>
			</Hero>

            <article className="desc">
                <div className="artigo">
                    <h4>Saindo da sala de aula</h4>
                        <p>
                            Texto explicativo sobre como ensinar fora da sala de aula
                        </p>
                 </div>
            </article>
            <article>
            <div className="artigo">
                    <h4>Objetivando com jogos</h4>
                        <p>
                            Texto explicativo sobre como focar o aluno em exemplos que ele irá entender
                        </p>
                 </div>
            </article>
		</>
	)
}

export default Jogos