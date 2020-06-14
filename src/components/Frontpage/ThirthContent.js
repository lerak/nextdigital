import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styles from './ThirthContent.module.css'

const ThirthContent = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "call to action.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return(
    <div className={styles.secondContent}>
         <div className={styles.flex1, styles.imgmargin}><Img fluid={data.placeholderImage.childImageSharp.fluid} /></div>
        <div clasName={styles.flex2}>
        <h3 className="heading">Enviar visitantes donde más lo necesita</h3>
      <p><em>Trae más clientes.</em></p>
      <p>Su Pagina web está diseñado para hacer más que generar tráfico web. Su objetivo principal es atraer clientes a su negocio y mejorar las ventas.</p>
      <h4>Nuestros Paginas Web.</h4>
      <ul>
        <li>Se basan en estrategias de SEO y pueden ayudar a que su negocio aparezca más fácilmente en los resultados de búsqueda.</li>
        <li>Tienen un CTA (llamado a la acción) claro que alienta a sus clientes a actuar rápidamente.</li>
        <li>Páginas Responsivas, adaptadas a los diferentes dispositivos móviles.</li>
        <li>Se pueden editar rápidamente.</li>

      </ul>
        </div>
    </div>
    )
}

export default ThirthContent