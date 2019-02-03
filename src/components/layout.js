import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import 'semantic-ui-css/semantic.min.css'
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {console.log(data)}
        <main>{children}</main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
