import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();

  const valoresIniciais = {
    titulo: '',
    url: '',
    categoria: '',
  };

  const { handleChange, values } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);
  const categoriasTitle = categorias.map(({ titulo }) => titulo);

  useEffect(() => {
    categoriasRepository.getAll()
      .then((categoriasBuscadas) => {
        setCategorias(categoriasBuscadas);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(e) => {
        e.preventDefault();

        // eslint-disable-next-line max-len
        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoriasTitle}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/Categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
