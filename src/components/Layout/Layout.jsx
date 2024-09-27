
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { ProgressBar } from '../ProgressBar/ProgressBar';

export const Layout = ({children}) => {
  return (
    <>
    <ProgressBar/>
    <Header/>
      {children}
    <Footer/>
    </>
  )
};
