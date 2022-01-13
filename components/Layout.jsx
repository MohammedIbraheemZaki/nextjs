import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer'
const Layout = ({children}) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
      </Head>
      <NavBar/>
        {children}
      <Footer/> 
    </>
  )
}

export default Layout
