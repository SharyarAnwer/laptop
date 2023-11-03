import React from 'react'

import { useParams } from 'react-router-dom'

export default function ForgotPassword() {

  const {id , token} = useParams()
    
  return (
    <div>
      This is forgot password page
    </div>
  )
}
