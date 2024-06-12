import React from 'react';
import './App.css'

// b/c of index.js in components folder, we are able to import all these in 1 line rather than importing all separately:
import { Blog, Features, Footer, Header, Possibility, WhatGPT3} from './containers'
import { Brand, CTA, Navbar} from './components'

const App = () => {
  return (
    <div className='App'>
       <div className='gradient__bg'>
          <Navbar />
          <Header />
       </div>
       <Brand />
       <WhatGPT3 />
       <Features />
       <Possibility />
       <CTA />
       <Blog />
       <Footer />
    </div>
  )
}

export default App