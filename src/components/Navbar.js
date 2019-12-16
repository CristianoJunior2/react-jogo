import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {FaAlignRight} from 'react-icons/fa'

//Extras
import logo from '../img/logo.png'


export default class Navbar extends Component {
    state={
        isOpen:false
    }

    handleToogle = () =>{
        this.setState({isOpen:!this.state.isOpen})
    }

    render() {
        return (
            <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to= "/">
                        <img src={logo} alt="Jogos educativos" />
                    </Link>
                    <button type="button" className="nav-btn" onClick={this.handleToogle}>
                        <FaAlignRight className="nav-icon" />
                    </button>
                </div>
                <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/jogos">Jogos</Link>
                    </li>
                    <li>
                        <Link to="/dicas">Dicas</Link>
                    </li>
                </ul>
            </div>
            </nav>
        )
    }
}
