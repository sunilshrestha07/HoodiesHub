import React from 'react'

type buttonTypes ={
    backgroundColor: string,
    displayText:string,
    onclick:()=>void
    
}

export default function Button({backgroundColor,displayText,onclick}:buttonTypes) {
  return (
    <div>
        <button className={`bg-${backgroundColor}`} onClick={onclick}>
            {displayText}
        </button>
    </div>
  )
}
