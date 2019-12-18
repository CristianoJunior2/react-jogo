//react
import React from 'react'
import {Link} from 'react-router-dom'

//Criadas
import Banner from '../components/Banner'
import Hero from '../components/Hero'

const Jogos = () =>{
	return(
		<>
			<Hero hero="dicasHero">
				<Banner title="Como utilizar os jogos?">
					<Link to='/' className="btn-primary">Inicio</Link>
				</Banner>
			</Hero>

            <article className="desc">
                <div className="artigo">
                    <h4>Jogos de estratégia</h4>
                        <p>
                        Os jogos de estratégia, segundo Silva et al. (2009), são jogos onde o jogador precisa administrar seus recursos, muitas vezes limitados, até atingir um objetivo. Para Oliveira (2018), os jogos de estratégia ainda podem se dividir em duas categorias. Os em tempo real, onde toda a ação acontece de forma contínua e as tomadas de decisões devem ser feitas mais rapidamente, tendo como exemplo a trilogia de Ages of  Empires, e os jogos de estratégia baseados em turnos, onde o jogador deve não só se atentar ao turno em questão, mas nas estratégias que devem ser tomadas nos turnos seguintes, sendo exemplo desses jogos Master of Monsters. Jogos de estratégia são “o jogos com uma alta exposição de informações que, geralmente, necessitam de uma associação entre essas informações e as melhores ações a serem tomadas”, logo, se aplicadas em sala de aula, pode-se estimular os alunos a desenvolver tomadas de decisões, noção de administração e a estratégia propriamente dita.

                        </p>
                 </div>
            </article>
            <article className="desc">
            <div className="artigo">
                    <h4>Jogos de MOBA</h4>
                        <p>
                        Os jogos MOBA, segundo Costa (2016), são jogos que envolvem vários jogadores se enfrentando em um mesmo mapa e utilizando vários elementos tanto do RPG quanto dos jogos de estratégia. Segundo Costa (2016) essa categoria cresceu na última década e atualmente é considerado um esporte, os chamados electronics sports (e-sports). Um representante dessa categoria é o jogo League of Legends (LoL), desenvolvida pela empresa Riot e consiste em uma arena onde dois times com cinco jogadores cada se enfrentam e tentam derrubar a base inimiga. O jogo possui campeonatos mundiais e no brasil existe o Campeonato Brasileiro de League of Legends. (CBLoL). “League passou a ser o jogo de PC mais jogado do mundo e um dos principais impulsionadores do crescimento explosivo dos esports.” (RIOT, 2017).
                        </p>
                 </div>
            </article>
		</>
	)
}

export default Jogos