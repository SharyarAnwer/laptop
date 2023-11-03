import React , {useRef , useEffect, useState} from 'react'

import ProductPicture from "./ProductPicture.svg"

export default function ProductDetails(prop) {

  const height = useRef(null)

  // const [showOrderSummary , setShowOrderSummary] = useState(true)

  useEffect(() => {

    console.log(height.current.scrollHeight)

  } , [])

  return (
    <div ref={height} className= { `flex gap-3 my-2 overflow-y-hidden duration-500` } 
    style={{height : `${prop.showOrderSummary ? height?.current?.scrollHeight + "px" : "0px"}`}}
    >

        <img src={ProductPicture}/>

        <div>

            <p className='text-sm font-semibold '>{prop.title}</p>

            <div className='flex gap-3'>

                <p>
                    <span className='text-black font-semibold'>Qty:&nbsp;</span>
                    <span className='text-black font-semibold'>{prop.quantity}</span>
                </p>

                <p className='text-black font-semibold'>${prop.price}</p>
            </div>
        </div>
      
    </div>
  )
}
