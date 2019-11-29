import React from 'react'
import {useContext} from 'react'
import {JogoContext} from '../context'
import Title from '../components/Title'

// pegando todos os valores unicos

const getUnico = (items, value) =>{
    return [...new Set(items.map(item => item[value]))]
}

export default function FiltroJogos({jogos}) {
    const context = useContext(JogoContext)

    const{
        handleChange, type,lancado,multiplayer,dispo,idade} = context
    //getUnioco
    
    let types =  getUnico(jogos,'type')
    let lancados = getUnico(jogos,'lancado')
    let idades = getUnico(jogos,'idade')
    //add all

    types=['todos',...types]
    lancados=['todas as platafomas',...lancados]
    idades=['mostrar todos',...idades]

    //map to jsx
    types=types.map((item,index)=>{
        return (
            <option value={item} key={index}>
                {item}
            </option>
        )
    })

    lancados = lancados.map((item,index) => {
        return (
            <option value={item} key={index}>
                {item}
            </option>
        )
    })

    idades = idades.map((item,index) => {
        return (
            <option value={item} key={index}>
                {item}
            </option>
        )
    })

    return (
        <section className="filter-container">
            <Title title="Procurar jogos"></Title>
            <form className="filter-form">

                {/*select */}
                <div className="form-group">
                    <label htmlFor="type">Categoria</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/*end select*/}

                {/*lancado */}
                <div className="form-group">
                    <label htmlFor="lancado">Lançado para:</label>
                    <select name="lancado" id="lancado" value={lancado} className="form-control" onChange={handleChange}>
                        {lancados}
                    </select>
                </div>
                {/*end lancado*/}

                {/*idade */}
                <div className="form-group">
                    <label htmlFor="idade">Recomendado para:</label>
                    <select name="idade" id="idade" value={idade} className="form-control" onChange={handleChange}>
                        {idades}
                    </select>
                </div>
                {/*end idade*/}

                {/*dispo */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="dispo" id="dispo" checked={dispo} onChange={handleChange}/>
                        <label htmlFor="dispo">Gratuito</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="multiplayer" id="multiplayer" checked={multiplayer} onChange={handleChange}/>
                        <label htmlFor="multiplayer">Multiplayer</label>
                    </div>
                </div>
                {/*end idade*/}

            </form>
        </section>
    )
}
