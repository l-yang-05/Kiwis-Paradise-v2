import React, { useState } from 'react';
import './App.css';
import routes from './routes';
import { useRoutes, A } from 'hookrouter';
import PageNotFound from './Components/pageNotFound';
import Footer from './Components/Footer';

const App = () => {
  const [hidden, setHidden] = useState(false)
  const routeResults = useRoutes(routes);

  const toggleButton = () => {
    if (!hidden) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  }
  return (
    <div>
      <header>
        <nav className="navbar bg-custom">
          <label className="burger" htmlFor="toggle">&#9776;</label>
          <input type="checkbox" id="toggle" name="toggle" onClick={toggleButton} />
          <A className="logo-name" href="/index"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Font_Awesome_5_solid_kiwi-bird.svg/1152px-Font_Awesome_5_solid_kiwi-bird.svg.png" alt="logo" />Kiwi's Paradise</A>
          <span className={hidden ? 'hidden' : 'links'} >
            <A className="navbar-item nounderline" href="/index">Home</A>
            <A className="navbar-item nounderline" href="/products">Products</A>
            <A className="navbar-item nounderline" href="/contact">Contact</A>
          </span>
        </nav>
      </header>
      <div>
        {routeResults || <PageNotFound />}
      </div>
      <Footer />
    </div >
  )
}

export default App;
