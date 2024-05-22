import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero';
import Works from './Components/Works/Works';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <div>
      <Navbar/>
      
     <Hero/>
     <section id='about'>
     <Title subtitle='ABOUT US' title='Our Art Work'/>
     </section>
     <About/>
     
     <section id='works'>
     <Title subtitle='LATEST WORK' title='What we offer'/>
     <Works/>
     </section>
     <Title subtitle='CONTACT US' title='Get in Touch'/>

     <Contact/>
     <Footer/>
      
    </div>
  )
}

export default App;
