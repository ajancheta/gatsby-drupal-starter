import React from "react"
import Img from "gatsby-image"
import Layout from "../../../layouts"
import Container from "../../../components/atoms/container"
import NodeInfo from "../../../components/molecules/node-info"
import { rhythm } from "../../../utils/typography"
import constants from "../../../utils/constants"
import { graphql } from 'gatsby'

const PageTemplate = ({ data }) => (
  <Layout data={data}>
    <div
      css={{
        background: constants.paleYellow,
        padding: rhythm(1.5),
        paddingTop: 0,
        marginBottom: rhythm(3),
      }}
    >
      <Container>
        <h1>{data.nodePage.title}</h1>
        <div css={{ background: `white`, padding: rhythm(1.5) }}>
        
          <div css={{ display: `flex`, justifyContent: `space-between` }}>

          <div dangerouslySetInnerHTML={{__html: data.nodePage.body.value }} />
          </div>
   
        </div>
      </Container>
    </div>
  </Layout>
)

export default PageTemplate

export const query = graphql`
  query($slug: String!) {
    ...AllTags
    ...AllPages
    nodePage(fields: { slug: { eq: $slug } }) {
      title
      body {
        value
      }
    }
  }
`;
