import * as React from "react"

import { graphql } from 'gatsby'
import { sbEditable } from '@storyblok/storyblok-editable'
// 2. dynamicComponents
import DynamicComponent from "../components/dynamicComponent"
// 3. 🪝
import useStoryblok from "../lib/storyblok"

import Layout from "../components/layout"
import Seo from "../components/seo"

// 3. 🪝 location
const IndexPage = ({ data, location }) => {
  let story = data.storyblokEntry
  // story.content = JSON.parse(story.content)
  // 3. 🪝
  story = useStoryblok(story, location)

  // 2. dynamicComponents
  const components = story.content.body.map(blok => {
    return (<DynamicComponent blok={blok} key={blok._uid} />)
  })

  return (
    <Layout>
      {/* // 3. 🪝 */}
      <div {...sbEditable(story.content)}>
        <Seo title="Home" />
        <h1>{ story.name }</h1>
        {/* 2. dynamicComponents */}
        { components }
      </div>
    </Layout>
  )
}

export default IndexPage

// 1. add page name
export const query = graphql`
  query HomeQuery {
    storyblokEntry(full_slug: {eq: "home"}) {
      content
      name
    }
  }
`