import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Imagen_mi from '../public/pp.jpeg'
import FacebookIcon from '../public/facebook.png'
import WhatsappIcon from '../public/whatsapp.png'
import Portfolio from '../public/portfolio.png'
import TwitterIcon from '../public/twitter.png'
import GithubIcon from '../public/github.png'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Andy Santisteban Blog</title>
        <meta name="description" content="Blog Andy Santisteban " />
        <meta name="description" content="Desarrollador Web " />
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
             <a className={styles.imagen_mi}>
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
                  <Link href={"https://www.facebook.com/AndySantisteban1607/"}>
                    <a className={styles.social__icon} target={"_blank"}>
                      <Image src={FacebookIcon} alt={"..."} className={styles.social__icon} width={30} height={30}/>
                    </a>
                  </Link>
                  <Link href={"https://api.whatsapp.com/send?phone=+51969518378&text=Hola!%20vengo%20de%20tu%20Blog"} >
                    <a className={styles.social__icon} target={"_blank"}>
                      <Image src={WhatsappIcon} alt={"..."} className={styles.social__icon} width={30} height={30}/>
                    </a>
                  </Link>
                  <Link href={"https://twitter.com/SantistebanAndy"}>
                    <a className={styles.social__icon} target={"_blank"}>
                      <Image src={TwitterIcon} alt={"..."} className={styles.social__icon} width={30} height={30}/>
                    </a>
                  </Link>
                  <Link href={"https://andysantisteban.com/"}>
                    <a className={styles.social__icon} target={"_blank"}>
                      <Image src={Portfolio} alt={"..."} className={styles.social__icon} width={30} height={30}/>
                    </a>
                  </Link>
                  <Link href={"https://github.com/AndySantisteban"}>
                    <a className={styles.social__icon} target={"_blank"}>
                      <Image src={GithubIcon}  alt={"..."}  width={30} height={30}/>
                    </a>
                  </Link>
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
