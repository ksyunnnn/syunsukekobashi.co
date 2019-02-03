import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'center', height: '90vh'}}>
      <div>
        <h1>404 NOT FOUND</h1>
        <p>🙏</p>
        <Link to="/">Go back</Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
