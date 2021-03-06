import React from "react"
// import { Link } from "gatsby"
import Contact from "../components/Contact"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Work from "../components/Frontpage/Work"
import Main from "../components/Frontpage/Main"
import Ebook from "../components/Frontpage/Ebook"
import SecondContent from "../components/Frontpage/SecondContent"
import ThirthContent from "../components/Frontpage/ThirthContent"

const IndexPage = () => (
<Layout>
<SEO title="Pagina Inicial" />
<Main />
<Ebook />
<SecondContent />
<ThirthContent />

<div>
  <Contact />
</div>
<div className="">
    
    <Work />
  
</div>


</Layout>
)

export default IndexPage
