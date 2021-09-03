import * as React from "react"
import DynamicComponent from "./dynamicComponent"
import { sbEditable } from '@storyblok/storyblok-editable'

const Grid = ({ blok }) => {
  return (
    <div {...sbEditable(blok)}>
      <ul style={{ display: `grid`, gridTemplateColumns: `1fr 1fr 1fr`, listStyleType: `none` }}>
        {blok.columns.map(blok => (
          <li key={ blok._uid }>
            <DynamicComponent blok={ blok } />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Grid