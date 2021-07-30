import * as React from "react"

const Feature = ({ blok }) => {
  return (
    <div style={{ margin: `0 .5rem` }}>
      <h3>{ blok.name }</h3>
      <img src={ blok.image.filename } alt={ blok.image.alt } />
      <p>{ blok.paragraph }</p>
    </div>
  )
}

export default Feature