import * as React from "react"
import { graphql } from 'gatsby'

import { storyblokInit, apiPlugin, StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { useStoryblok } from "../lib/storyblok"
import Teaser from '../components/teaser'
import Grid from '../components/grid'
import Feature from '../components/feature'

import Layout from "../components/layout"

storyblokInit({
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    grid: Grid,
    feature: Feature
  }
});

export default function StoryblokEntry({ data }) {
  let story = data.storyblokEntry
  // story.content = JSON.parse(story.content)
  story = useStoryblok(story)

  const components = story.content.body.map(blok => {
    return (<StoryblokComponent blok={blok} key={blok._uid} />)
  })

  return (
    <Layout>
      <div {...storyblokEditable(story.content)}>
        {components}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($full_slug: String!) {
    storyblokEntry(full_slug: { eq: $full_slug }) {
      id
      name
      full_slug
      content
    }
  }
`

export async function config() {
  return () => {
    return {
      defer: true,
    }
  }
}