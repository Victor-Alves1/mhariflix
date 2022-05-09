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
          <h1>Unlimited movies, TV, shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
        <div className='Container-initialscreen-subscription'>
          <input type="email" placeholder='Email address' />
          <a href=""><button>Get Started</button></a>
        </div>
      </div>
      <div className='Container-Catalog'>
        <h2>
          See our film catalog
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
        <h2>Watch anywhere and any screen.</h2>
      </div>
      <div className='Container-Catalog-Grid'>
        <div className='Platform-Catalog item-tv w-1 h-2'>
          <img src={tv} alt="" />
        </div>

        <div className='Platform-Catalog w-1 h-1'>
          <h3>Watch on tv</h3>
          <hr />
          <br />
          <p>For those who like a movie screen in the comfort of being at home</p>
        </div>

        <div className='Platform-Catalog w-1 h-1'>
            <h3> On Smartphone</h3>
            <hr />
            <br />
            <div className='item-cellphone'>
              <p>For those who like to watch anywhere and anytime</p>
              <img src={phone} alt="" />
          </div>
            
        </div>

        <div className='Platform-Catalog item-tablet w-1 h-1'>
          <img src={tablet} alt="" />
        </div>
        <div className='Platform-Catalog w-1 h-1'>
          <h3>On Tablet</h3>
          <hr />
          <br />
          <p>For those who like to watch a good movie at any time and are not satisfied with a small screen.</p>
        </div>
        
      </div>
    </div>
  )
}

export default App
