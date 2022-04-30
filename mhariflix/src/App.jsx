import { useState } from 'react'
import './index.css'
import bg from './imagens/bg-bg.jpg' 
import heroesMovies from './imagens/super-hero.png'
import actionMovies from './imagens/action-movies.png'
import sfMovies from './imagens/science-fiction.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <img className='bg' src={bg} alt="imagem de fundo" />
        <div className='first-section'>
          <p>Filmes e séries em um só lugar, com uma assinatura mensal de R$9.90reais por mês você aproveita tudo isso dentro de casa.</p>
          <p>Assista ilimitado e escolhendo a programação, são mais de 100.000.000 opções diferentes para você aproveitar</p>
        </div>
        <a href=""><button>ASSINE AGORA</button></a>
      </div>
      <div className='Container-Movies-Catalog'>
        <h2>
          Veja nosso catálogo de filmes
        </h2>
        <div className='Movies-Catalog'>
          <a href="">
            <div>
              <img src={heroesMovies} alt="Super heroes movies catalog" />
              <p>SUPER HEROES</p>
            </div>
          </a>
          <a href="">
            <img src={actionMovies} alt="Action movies catalog" />
            <p>ACTION</p>
          </a>
          <a href="">
            <img src={sfMovies} alt="Scientific fiction movies catalog" />
            <p>SCIENTIFIC FICTION</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
