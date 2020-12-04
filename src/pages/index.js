import React from "react"
import { graphql } from "gatsby"
import Day from "../components/day"
import Layout from '../components/layout'

export default function Home({data}) {

  return (
    <Layout>
      <div className='container'>
        {data.site.siteMetadata.dayData.map(function(url, i){
          let day = i + 1;
          return <Day key={ i } dayNumber={day} url={url}/>
        })}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    site {
      siteMetadata{
        title
        dayData
      }
    }
  }
`