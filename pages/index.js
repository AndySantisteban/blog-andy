import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Imagen_mi from '../public/pp.jpeg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Andy Santisteban Blog</title>
        <meta name="description" content="Blog Andy Santisteban " />
        <meta name="description" content="Desarrollador Web " />
        <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav>
            <ul>
              <li>
                <Link href="/">
                  <a>Andy Santisteban</a>
                </Link>
              </li>
            </ul>
        </nav>
       <div className={styles.containerHome}>
         <div  className={styles.home_banner}>
           <Link href="https://www.andysantisteban.com">
             <a>
               <Image
                   src={Imagen_mi}
                   alt="foto_andysantisteban"
                   width="400px"
                   height="400px"
                   className={styles.imagen_mi}
               />
             </a>
           </Link>
           <aside className={styles.container_hero}>
             <div >
               <h1> Andy Josue Santisteban Ostos</h1>
               <h3> Desarrollador web Frontend </h3>
               <p> Hola, este es mi pequeño blog donde ire publicando cositas nuevas sobre mi y sobre lo que pasa en el día a día</p>
                {/*agregar descripcion sobre mi*/}
               <span> Este blog fue realizado con : Next.js y MDX</span>
                <div className={styles.social}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://img.icons8.com/metro/30/ffffff/facebook.png" alt={"..."} className={styles.social__icon}/>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://img.icons8.com/ios-glyphs/30/ffffff/whatsapp.png" alt={"..."} className={styles.social__icon}/>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter.png" alt={"..."} className={styles.social__icon}/>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://img.icons8.com/ios-glyphs/30/ffffff/portfolio.png" alt={"..."} className={styles.social__icon}/>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png"  alt={"..."} className={styles.social__icon}/>
                </div>

             </div>
             <Link href="/blog">
               <a>
                 <button className={styles.button}>
                    <h3>Ir a mi blog</h3>
                 </button>
               </a>
             </Link>
               <Link href="https://andysantisteban.com">
                 <a>
                   <button className={styles.button}>
                     <h3>Saber más de mi</h3>
                   </button>
                 </a>
               </Link>
           </aside>

         </div>
       </div>
      </main>
    </div>
  )
}
