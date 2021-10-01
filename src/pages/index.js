import * as React from "react"

import { graphql } from 'gatsby'
import { sbEditable } from '@storyblok/storyblok-editable'
import DynamicComponent from "../components/dynamicComponent"
import useStoryblok from "../lib/storyblok"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data, location }) => {
  let story = data.storyblokEntry
  // story.content = JSON.parse(story.content)
  story = useStoryblok(story, location)

  const components = story.content.body.map(blok => {
    return (<DynamicComponent blok={blok} key={blok._uid} />)
  })

  return (
    <Layout>
      <div {...sbEditable(story.content)}>
        <Seo title="Home" />
        <h1>{ story.name }</h1>
        { components }
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    storyblokEntry(full_slug: {eq: "home"}) {
      content
      name
    }
  }
`