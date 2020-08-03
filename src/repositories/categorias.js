import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;
const URL_CATEGORIES_VIDEOS = `${config.URL_BACKEND}/categorias?_embed=videos`;

function getAll() {
  return fetch(URL_CATEGORIES)
    .then(async (response) => {
      if (response.ok) {
        const respostaConvertida = await response.json();

        return respostaConvertida;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllWithVideos() {
  return fetch(URL_CATEGORIES_VIDEOS)
    .then(async (response) => {
      if (response.ok) {
        const respostaConvertida = await response.json();

        return respostaConvertida;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function create(dadosCategoria) {
  return fetch(URL_CATEGORIES, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(dadosCategoria),
  })
    .then(async (response) => {
      if (response.ok) {
        const respostaConvertida = await response.json();

        return respostaConvertida;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

export default {
  getAllWithVideos,
  getAll,
  create,
};
