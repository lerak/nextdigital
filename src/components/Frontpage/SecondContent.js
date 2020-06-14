import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styles from './SecondContent.module.css'

const SecondContent = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "call to action1.png" }) {
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
        <div clasName={styles.flex1}>
          <h3 className="heading">Su negocio, sus objetivos, su Pagina Web</h3>
          <p><em>Impulse las ventas con un claro llamado a la acción.</em></p>
          <p>Colocaremos un botón de llamado a la acción justo en la parte superior de su pagina web, para que los consumidores puedan interactuar fácilmente con su empresa.</p>
          <h4><strong>Eliminar la sobrecarga de información.</strong></h4>
          <p>Brinde a los clientes solo la información más crucial que necesitan para elegir su negocio en lugar de la competencia.</p>
        </div>
        <div className={styles.flex2}><Img fluid={data.placeholderImage.childImageSharp.fluid} /></div>
    </div>
    )
}

export default SecondContent