import { Footer } from '../Footer.jsx/Footer'
import { Header } from '../Header/Header'

export const Layout = ({children}) => {
  return (
    <>
    <Header/>
      {children}
    <Footer/>
    </>
  )
};
