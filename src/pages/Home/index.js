import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json';

import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

function Home() {
  return (
    <PageDefault>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />

{/* {
      "titulo": "Front End",
      "link": "https://www.alura.com.br/formacao-front-end",
      "cor": "#6BD1FF",
      "link_extra": {
        "text": "Formação de Front End na Alura",
        "url": "https://www.alura.com.br/cursos-online-front-end"
      },
      "videos": [
        {
          "titulo": "O que faz uma desenvolvedora front-end? #HipstersPontoTube",
          "url": "https://www.youtube.com/watch?v=ZY3-MFxVdEw"
        },
        {
          "titulo": "SEO com React",
          "url": "https://www.youtube.com/watch?v=c8mVlakBESE"
        }   
      ]
    }, */}
      
      {dadosIniciais.categorias.map((categoria, i) => {
        if (i === 0)    // Pokémon, SuperOnze, Ilha dos Desafios
        {
          return (
            <Carousel
              key={categoria.title}
              ignoreFirstVideo
              category={categoria}
            />
          );
        }

        return (      
          <Carousel 
            key={categoria.title}
            category={categoria}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;