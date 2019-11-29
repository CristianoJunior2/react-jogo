import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'

//pages
import Home from './pages/Home'
import Jogos from './pages/Jogos'
import Dicas from './pages/Dicas'
import UnicoJogo from './pages/UnicoJogo'
import Erro from './pages/Erro'

//Components
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'



function App() {
  return (
    <>
    <Navbar/>
    <ScrollToTop />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/jogos/" component={Jogos}/>
      <Route exact path="/dicas/" component={Dicas}/>
      <Route exact path="/jogos/:slug" component={UnicoJogo}/>

      <Route component ={Erro}/>
    </Switch>
    </>
  );
}

export default App;
