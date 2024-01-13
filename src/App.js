/* eslint-disable jsx-a11y/anchor-is-valid */
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ComingSoon from './Components/ComingSoon';

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
      <ComingSoon />
    </div>
  )
}

export default App;
