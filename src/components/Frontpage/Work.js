import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styles from './Work.module.css'


const Work = () => {
  const data = useStaticQuery(graphql`
  query {
    hucochea: file(relativePath: { eq: "ngsidinginc.com.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    zenup: file(relativePath: { eq: "call to action.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    dentista: file(relativePath: { eq: "rsz_1dentista.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    itech: file(relativePath: { eq: "itech.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)


    return (
      <div className={styles.some_page_wrapper}>
        <h2 className="heading">Algunos de Nuestros Trabajos</h2>
  <div className={styles.row}>
    <div className={styles.column}>
      <div className={styles.blue_column}>
      <Img fluid={data.zenup.childImageSharp.fluid}/>
      </div>
    </div>
    <div className={styles.column}>
      <div className={styles.green_column}>
        <Img fluid={data.dentista.childImageSharp.fluid}/>
      </div>
    </div>
    </div>
    <div className={styles.some_page_wrapper}>
    <div className={styles.column}>
      <div className={styles.green_column}>
        <Img fluid={data.itech.childImageSharp.fluid}/>
      </div>
    </div>
    <div className={styles.column}>
      <div className={styles.green_column}>
        <Img fluid={data.itech.childImageSharp.fluid}/>
      </div>
    </div>
  </div>
  </div>



    )
}

export default Work