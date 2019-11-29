import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//criadas
import defaultBcg from '../img/bg.jpg'
import Banner from '../components/Banner'
import { JogoContext } from '../context'
import StyledHero from '../components/StyledHero'

export default class UnicoJogo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = JogoContext

    render() {
        const { getJogo } = this.context
        const jogo = getJogo(this.state.slug)
        if (!jogo) {
            return <div className="error">
                <h3>Erro</h3>
                <Link to="/jogos" className="btn-primary">Voltar</Link>
            </div>
        }
        const { name, description, lancado, idade, ano, extras, images, dispo } = jogo

        const [mainImg, ...defaultImg] = images
        console.log(defaultImg)

        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg}>
                    <Banner title={`${name}`}>
                        <Link to='/jogos' className="btn-primary">Voltar</Link>
                    </Banner>
                </StyledHero>
                <section className="unico-jogo">
                    <div className="info-jogo">
                        <article className="desc">
                            <h3>Detalhes</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h4>Vantagens Pedagógicas</h4>
                            <ul className="extras">
                                {
                                    extras.map((item, index) => {
                                        return <li key={index}> - {item}</li>
                                    })
                                }
                            </ul>
                        </article>
                    </div>
                </section>
                <section className="jogo-extras">
                    <h3>Info</h3>
                    <h6>Ano : {ano}</h6>
                    <h6>Idade : {idade}+</h6>
                    <h6>
                        Plataforma principal:{" "}{
                            `${lancado} `
                        }
                    </h6>
                    <h6>
                        {dispo ? "Jogo Gratuito" : "Jogo pago"}
                    </h6>
                </section>
                <section className="unico-jogo">
                    <h6>Galeria</h6>
                    <div className="imagem-jogo">
                        {defaultImg.map((item, index) => {
                            return <img key={index} src={item} alt={name} />
                        })}
                    </div>
                </section>
            </>
        )
    }
}
