import React from 'react'
import styles from './Footer.module.css'
import logo from './../images/next-logo.png'

const Footer = () => {
    return(
        <div className={styles.main}>
           <div className={styles.col1}>
               <h1>Next<span>Digital</span></h1>
               <p>Ayudamos a las empresas a maximizar <br/>su presencia en línea con un enfoque<br/> personalizado para el marketing digital.</p>
               <p className={styles.copyright}>&copy; 2020 Ioftz Derechos Reservados</p>
            </div>
           <div className={styles.col2}><img src={logo} alt="Next Digital Pagina web Playa del Carmen"/></div>
           <div className={styles.col3}>
               <h3>Contacto</h3>
               <ul>
                   <li>Tel.<a href="tel:9841776607">9841776607</a></li>
                   <li>E-mail: <a href="mailto:karel@nextdigital.com.mx">Pregunta@nextdigital.com.mx</a></li>
                   <li><a href="https://www.facebook.com/nextdigitalmedia">Facebook</a></li>
                   <li>Instagram</li>
               </ul>
               </div>
        </div>
    )
}

export default Footer