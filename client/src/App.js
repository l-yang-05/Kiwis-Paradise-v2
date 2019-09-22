import React from 'react';
import './App.css';
import routes from './routes';
import { useRoutes, A } from 'hookrouter';
import PageNotFound from './Components/pageNotFound';
import Footer from './Components/Footer';

const App = () => {
  const routeResults = useRoutes(routes);
  return (
    <div>
      <header>
        <nav className="navbar bg-custom">
          <A className="logo-name" href="/index"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Font_Awesome_5_solid_kiwi-bird.svg/1152px-Font_Awesome_5_solid_kiwi-bird.svg.png" alt="logo" />Kiwi's Paradise</A>
          <A className="navbar-item nounderline" href="/index">Home</A>
          <A className="navbar-item nounderline" href="/products">Products</A>
          <A className="navbar-item nounderline" href="/contact">Contact</A>
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
