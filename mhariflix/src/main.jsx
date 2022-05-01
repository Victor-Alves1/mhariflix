import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './Header'

import App from './App'
import Heroes from './Heroes_movies'
import Action from './Action_movies'
import Fiction from './Fiction_movies'


import Footer from './footer'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/heroes" exact element={<Heroes />} />
        <Route path="/action" exact element={<Action />} />
        <Route path="/fiction" exact element={<Fiction />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)

//instalei o react-router-dom
