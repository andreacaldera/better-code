import React from 'react'

const NAUGHTY_DEVELOPER = true

export const AwesomeComponent: React.FunctionComponent = () => {
  if (NAUGHTY_DEVELOPER) {
    return null
    /** catch error faster by using Typescript, the following line is incorrect and will immediately give you an error instead of failing at runtime */
    // return undefined
  }
  return <h1>Typescript is awesome</h1>
}