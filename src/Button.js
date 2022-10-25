import React from 'react'
import Icon from './Icon'

export default function Button({loadQuote}) {
  return (
    <button onClick={loadQuote}>
      <Icon />
    </button>
  )
}
