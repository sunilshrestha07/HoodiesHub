
import React, { useState } from 'react'

export default function StarRating() {
    const [starRating,setStarRating]=useState<number>(0)
    const [hoverstarRating,setHoverStarRating]=useState<number>(0)
  return (
    <>
    <div className="">
        <div className="">
            <p>Star Rating</p>
        </div>
        <div className="">
            {/* making array of 5 star */}
            {[...Array(5)].map((_,index)=>{
                //if the index+1 is less than or equal to the star rating make them yellow color same gose for the hover star rating
                return <span className={`text-5xl cursor-pointer ${index+1 <= starRating ? 'text-yellow-500  ':''}
                ${index+1 <= hoverstarRating ? 'text-yellow-500 ':''}`}
                onClick={()=>{
                    setStarRating(index+1)
                }}
                onMouseOver={()=>{
                    setHoverStarRating(index+1)
                }}
                onMouseLeave={()=>{
                    setHoverStarRating(0)
                }}
                key={index}>&#9733;</span>
            })}
        </div>
        <div className="">
            <p>Seleted Star rating:{starRating}</p>
            <p>Seleted Star rating:{hoverstarRating}</p>
        </div>
    </div>
    </>
  )
}
