import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Image src='/favicon.ico' width={50} height={50} />
            <h1>This is home page</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero repellendus, at eligendi repudiandae ipsum neque quod cumque maxime adipisci inventore mollitia delectus rerum sed fugit odit distinctio iure architecto perspiciatis.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero repellendus, at eligendi repudiandae ipsum neque quod cumque maxime adipisci inventore mollitia delectus rerum sed fugit odit distinctio iure architecto perspiciatis.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero repellendus, at eligendi repudiandae ipsum neque quod cumque maxime adipisci inventore mollitia delectus rerum sed fugit odit distinctio iure architecto perspiciatis.</p>
            <Link href='/persons' >
              <a >See Ninja Listing</a>
            </Link> 
          </div>
        </div>
      </div>
    </>
  )
}
