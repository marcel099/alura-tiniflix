import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;
const URL_CATEGORIES_VIDEOS = `${config.URL_BACKEND}/categorias?_embed=videos`;

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

export default {
  getAllWithVideos,
  getAll,
};
