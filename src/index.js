import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import './reset.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Videos';
import CadastroCategoria from './pages/cadastro/Categorias';

// Arquivo que inicializa o React
// Em volta da aplicação deve haver um sistema de Roteamento

// todo Desafio: Criar um game para a página 404.

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/" component={Home} exact />
      <Route component={Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);