import React, { Component } from 'react'

import Client from './Contentful'

Client.getEntries({content_type:"jogo"}).then((response) => console.log(response.items))

const JogoContext = React.createContext();

export default class InfoJogos extends Component {
    state = {
            jogos: [],
            sortedGames: [],
            detalheJogos: [],
            loading: true,
            type:"todos",
            lancado:"todas as platafomas",
            idade:"mostrar todos",
            multiplayer: false,
            dispo: false
        }

    //getData

    getData = async () => {
        try {
            let response = await Client.getEntries({content_type:"jogo", order:"fields.name"})

            let jogos = this.formatData(response.items)
            let detalheJogos = jogos.filter(jogo => jogo.featured === true)
            this.setState({
                jogos,
                sortedGames: jogos,
                detalheJogos,
                loading: false,
            })

        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {
        this.getData()

    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)
            let jogo = { ...item.fields, images, id }
            return jogo
        })
        return tempItems
    }

    getJogo = (slug) => {
        let tempJogos = [...this.state.jogos]
        const jogo = tempJogos.find(jogo => jogo.slug === slug)
        return jogo
    }

    handleChange = event => {
        const target = event.target
        const value = target.type ==='checkbox'? target.checked:target.value
        const name = event.target.name
        this.setState(
            {
            [name]:value
            },this.filterJogos)
    }

    filterJogos = () =>{
        let{jogos,type,lancado,multiplayer,dispo,idade}=this.state
        //pega tudo
        let tempJogos =[...jogos]

        //filtro pro tipo
        if(type!=='todos'){
            tempJogos = tempJogos.filter(jogo => jogo.type === type)
        }

        //filtro plataforma
        if(lancado!=='todas as platafomas'){
            tempJogos = tempJogos.filter(jogo => jogo.lancado === lancado)
        }

        //filtro idade
        if(idade!=='mostrar todos'){
            tempJogos = tempJogos.filter(jogo => jogo.idade === idade)
        }

        //filtros check
        if(dispo){
            tempJogos = tempJogos.filter(jogo => jogo.dispo === true)
        }

        //filtros check
        if(multiplayer){
            tempJogos = tempJogos.filter(jogo => jogo.multiplayer === true)
        }

        this.setState({
            sortedGames:tempJogos
        })   

    }
    render() {
        return (
            <JogoContext.Provider value={{ 
                ...this.state, 
                getJogo: this.getJogo, 
                handleChange: this.handleChange }}>
                {this.props.children}
            </JogoContext.Provider>

        )
    }
}

const JogoConsume = JogoContext.Consumer

export function withJogoConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (<JogoConsume>
            {value => <Component {...props} context={value} />}
        </JogoConsume>
        )
    }

}

export { InfoJogos, JogoConsume, JogoContext }