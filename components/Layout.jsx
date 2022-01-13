import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer'
import Script from 'next/script'
const Layout = ({children}) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
      </Head>
      <NavBar/>
        {children}
      <Footer/> 
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
    </>
  )
}

export default Layout
