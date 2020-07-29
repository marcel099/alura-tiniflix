import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  }

  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(valoresIniciais)
  // const [descricao, setDescricao] = useState('')
  // const [cor, setCor] = useState('')

    function setValue(chave, valor) {
      setValues({
        ...values,
        [chave]: valor,
      })
    }

    function handleChange(evento){
      const {getAttribute, value} = evento.target;

      console.log(getAttribute)
      console.log(evento.target.getAttribute)
      console.log(evento.target.getAttribute === getAttribute)
      setValue(
        evento.target.getAttribute('name'), // todo: A desestruturação não está funcionando
        value
      );
    }

    // function handlerDescricao(evento){
    //   setDescricao(evento.target.value)
    // }

    // function handlerCor(evento){
    //   setCor(evento.target.value)
    // }

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(evento){
          evento.preventDefault()

          setCategorias([ ...categorias, values ])

          setValues(valoresIniciais)
        }}>
          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <div>
            <label>
              Descrição:
              <textarea 
                type="text"
                name="descricao"
                value={values.descricao}
                onChange={handleChange}
              />
            </label>
          </div>

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

          <button>
            Cadastrar
          </button>
        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={indice}>
                {categoria}
              </li>
            )
          })}
        </ul>

        <Link to="/">
            Voltar para a Home
        </Link>
      </PageDefault>
    )
}

export default CadastroCategoria;