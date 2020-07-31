import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(dadosVideo) {
  return fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(dadosVideo),
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
  create,
};
