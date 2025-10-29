import { useLocation } from 'react-router-dom'
import { Footer, Header } from '../../Components';

function PublicLayout({ children }) {
  const location = useLocation();

  const noLayoutRoutes = ["/help", "/auth"];

  const hideLayout = noLayoutRoutes.includes(location.pathname);
  return (
    <>
     {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  )
}

export default PublicLayout
