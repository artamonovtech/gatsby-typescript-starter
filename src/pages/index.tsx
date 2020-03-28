import React from "react"
import { Link } from "gatsby"

import { Image } from "../components/image"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"

const IndexPage: React.FC<{}> = () => (
  <Layout>
    <Seo title="Home" />
    <h1>{`Hi people`}</h1>
    <p>{`Welcome to your new Gatsby site.`}</p>
    <p>
      {`This is a simple starter app converted to `}
      <a
        href="https://www.typescriptlang.org"
        target={`_blank`}
      >{`TypeScript`}</a>
      {` based from `}
      <a
        href="https://github.com/gatsbyjs/gatsby-starter-default"
        target={`_blank`}
      >{` the Gatsby default starter`}</a>
      {`.`}
    </p>
    <p>
      {`Go to this repository on `}
      <a
        href="https://github.com/artamonovtech/gatsby-typescript-starter-default"
        target={`_blank`}
      >{`GitHub`}</a>
      .
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">{`Go to page 2`}</Link>
  </Layout>
)

export default IndexPage
