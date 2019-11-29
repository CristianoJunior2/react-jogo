import React from 'react'

import loadingGif from '../img/load.gif'

export default function Loading() {
    return (
        <div className="loading">
            <h5>Carregando informações</h5>
            <img src={loadingGif} alt="" />
        </div>
    )
}
