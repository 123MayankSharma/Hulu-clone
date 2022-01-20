import Head from 'next/head'
import Header from '../components/Header.js'
import Nav from '../components/Nav.js'
export default function Home() {
  return(<>
       <div>
      <Head>
      <title>Hulu Clone</title>
      </Head>
      <Header/>
      <Nav/>
      {/* Results*/ }
       </div>




      </>)
}
