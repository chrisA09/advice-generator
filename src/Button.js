import React from 'react'
import Dice from './Dice'

export default function Button({loadQuote}) {
  return (
    <div onClick= {loadQuote}>
        <Dice />
    </div>
  )
}
