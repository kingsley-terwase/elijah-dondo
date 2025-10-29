
import { Provider } from 'react-redux'
import { store } from './Store'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from 'react-router-dom'
// import ScrollToTop from './Components/ScrollToTop';
import './index.css'
import Router from './Routes';

function App() {
  return (
    <Provider store={store}>

      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  )
}

export default App