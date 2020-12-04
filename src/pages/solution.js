import React from 'react';
import dayOne from '../solutions/day02' 

export default function Solution({location} ) {
    console.log(location.state)
    let text = dayOne()
    console.log(text)
  return (
    <div>
      <p>
        {text}
      </p>
    </div>
  )
}