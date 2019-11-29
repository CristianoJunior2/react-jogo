import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

//criadas
import defaultImg from '../images/room-1.jpeg'

export default function Jogo({jogo}) {
    const{name,slug,images,ano,dispo} = jogo;
    if(dispo){
        return (
            <article className="jogo">
                <div className="img-container">
                    <img src={images[0] || defaultImg} alt='unico jogo'></img>
                    <div className="price-top">
                        <h6>Gratuito</h6>
                    </div>
                    <Link to={`/jogos/${slug}`} className="btn-primary jogo-link">informações</Link>
                </div>    
            <p className="jogo-info">{name}</p>
            </article>
        )
    }
    else{
        return (
            <article className="jogo">
                <div className="img-container">
                    <img src={images[0] || defaultImg} alt='unico jogo'></img>
                    <div className="price-top">
                        <h6>Pago</h6>
                    </div>
                    <Link to={`/jogos/${slug}`} className="btn-primary jogo-link">informações</Link>
                </div>    
            <p className="jogo-info">{name}</p>
            </article>
        )
    }
}

Jogo.propTypes={
    jogo:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        ano:PropTypes.number.isRequired,
        dispo:PropTypes.bool.isRequired
    })
}
