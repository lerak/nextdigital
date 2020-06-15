import React from 'react'
// import { Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from './Main.module.css'

const Main = () => {
  console.log(styles)
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "google.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
    <div className={styles.container}>
      <div><Img fluid={data.placeholderImage.childImageSharp.fluid} /></div>
      <div className={styles.contentpagina}>
        <h2 className="heading">Tu web es la tarjeta de presentación digital de tu empresa.</h2>
        <p>Una página web de empresa proporciona innumerables beneficios para tu negocio.</p> <p>Hoy en día, diseñar webs de calidad para Pymes requiere una inversión mínima al alcance de todos los bolsillos. La presencia en Internet impulsará el crecimiento de tu empresa y aportará un valor añadido incalculable a muchos aspectos de tu negocio. </p><p><em>Si alguna vez te has preguntado sobre que beneficios podrías obtener con una web corporativa y que tan efectiva podría llegar a ser</em></p> <h3><strong>ERROR:</strong>“No necesito una web porque yo no vendo por Internet”</h3><p> Una web para empresas no sólo sirve para vender por Internet, sino para tener visibilidad y hacer que los potenciales clientes puedan encontrate. Si no tienes presencia en Internet de una forma adecuada nadie podrá encontrar tu negocio.</p>
      </div>
    </div>
    )
}

export default Main