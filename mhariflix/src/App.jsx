import { useState } from 'react'
import './index.css'
import bg from './imagens/bg-bg.jpg' 
import heroesMovies from './imagens/super-hero.png'
import actionMovies from './imagens/action-movies.png'
import sfMovies from './imagens/science-fiction.png'
import phone from './imagens/cellphone.png'
import tv from './imagens/tv-screen.png'
import tablet  from './imagens/tablet-viewer.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='initial-screen'>
        <img className='bg' src={bg} alt="imagem de fundo" />
        <div className='first-section'>
          <p>Filmes e séries em um só lugar, com uma assinatura mensal de R$ X.XX reais por mês você aproveita tudo isso dentro de casa.</p>
          <p>Assista ilimitado e escolhendo a programação, são mais de 100.000.000 opções diferentes para você aproveitar</p>
        </div>
        <a href=""><button>ASSINE AGORA</button></a>
      </div>
      <div className='Container-Catalog'>
        <h2>
          Veja nosso catálogo de filmes
        </h2>
        <div className='Movies-Catalog'>
          <a href="/heroes">
              <img src={heroesMovies} alt="Super heroes movies catalog" />
              <p>SUPER HEROES</p>
          </a>
          <a href="/action">
            <img src={actionMovies} alt="Action movies catalog" />
            <p>ACTION</p>
          </a>
          <a href="/fiction">
            <img src={sfMovies} alt="Scientific fiction movies catalog" />
            <p>SCIENTIFIC FICTION</p>
          </a>
        </div>
      </div>
      <div className='Container-Catalog-title'>
        <h2>Assista em qualquer lugar e em qualquer tela</h2>
      </div>
      <div className='Container-Catalog-Grid'>
        <div className='Platform-Catalog item-tv w-1 h-2'>
          <img src={tv} alt="" />
        </div>

        <div className='Platform-Catalog w-1 h-1'>
          <h3>Na TV</h3>
          <hr />
          <br />
          <p>Para quem gosta de uma tela de cinam no conforto de estar em casa</p>
        </div>

        <div className='Platform-Catalog w-1 h-1'>
            <h3> No celular</h3>
            <hr />
            <br />
            <div className='item-cellphone'>
              <p>Para que acha gosta de assistir em qualquer lugar e em qualquer descanso</p>
              <img src={phone} alt="" />
          </div>
            
        </div>

        <div className='Platform-Catalog item-tablet w-1 h-1'>
          <img src={tablet} alt="" />
        </div>
        <div className='Platform-Catalog w-1 h-1'>
          <h3>No Tablet</h3>
          <hr />
          <br />
          <p>Para quem gosta de assistir um bom filme a qualquer hora e não se contenta com uma tela pequena</p>
        </div>
        
      </div>
    </div>
  )
}

export default App
