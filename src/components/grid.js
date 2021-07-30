import * as React from "react"
import DynamicComponent from "./dynamicComponent"
import SbEditable from "storyblok-react"

const Grid = ({ blok }) => {
  return (
    <SbEditable content={ blok } key={ blok._uid }>
      <ul style={{ display: `grid`, gridTemplateColumns: `1fr 1fr 1fr`, listStyleType: `none` }}>
        {blok.columns.map(blok => (
          <li key={ blok._uid }>
            <DynamicComponent blok={ blok } />
          </li>
        ))}
      </ul>
    </SbEditable>
  )
}

export default Grid