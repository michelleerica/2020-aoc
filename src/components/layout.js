import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Christmas from '../components/christmas'

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  
  return (
    <div>
    <br/>
      <Christmas/>
      <Link to={`/`}>
        <h1 className='header'>
          {data.site.siteMetadata.title}
        </h1>
      </Link>
      {children}
    </div>
  )
}