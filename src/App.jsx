import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Router from './Routes';

function App() {
  return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
  )
}

export default App