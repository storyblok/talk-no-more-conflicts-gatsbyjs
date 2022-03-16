import * as React from "react"
import { graphql } from 'gatsby'
import config from '../../gatsby-config'

import { storyblokInit, apiPlugin, StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { useStoryblok } from '../lib/storyblok'
import Teaser from '../components/teaser'
import Grid from '../components/grid'
import Feature from '../components/feature'

import Layout from "../components/layout"
import Seo from "../components/seo"

const sbConfig = config.plugins.find((item) => item.resolve === 'gatsby-source-storyblok')

storyblokInit({
  accessToken: sbConfig.options.accessToken,
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    grid: Grid,
    feature: Feature
  }
});

const IndexPage = ({ data }) => {
  let story = data.storyblokEntry
  // story.content = JSON.parse(story.content)
  story = useStoryblok(story)

  const components = story.content.body.map(blok => (<StoryblokComponent blok={blok} key={blok._uid} />))

  return (
    <Layout>
      <div {...storyblokEditable(story.content)}>
        <Seo title="Home" />
        <h1>{story.name}</h1>
        {components}
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
      id
    }
  }
`