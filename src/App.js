/* eslint-disable jsx-a11y/anchor-is-valid */
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HeroComponent from './Components/heroComponent.js';
import AboutMe from './Components/AboutMe.js';
import Work from './Components/Work.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

function Home() {
  return(
    <div className='bg-mainBlack'>
      <HeroComponent />
      <AboutMe />
      <Work />
    </div>
  )
}

export default App;
