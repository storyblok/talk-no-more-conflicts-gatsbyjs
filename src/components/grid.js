import * as React from "react"
import DynamicComponent from "./dynamicComponent"
import { storyblokEditable } from "@storyblok/js";

const Grid = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <ul style={{ display: `grid`, gridTemplateColumns: `1fr 1fr 1fr`, listStyleType: `none` }}>
        {blok.columns.map(blok => (
          <li key={blok._uid}>
            <DynamicComponent blok={blok} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Grid