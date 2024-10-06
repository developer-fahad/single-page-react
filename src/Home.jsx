import { useState } from 'react'
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import ProcessCards from './Components/ProcessCards/ProcessCards';
import Footer from './Components/Footer/Footer';

function Home() {

  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <ProcessCards />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home;
