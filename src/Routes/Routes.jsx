import React from 'react'

import PrivateRoute from './Private/PrivatRoute'
import PublicRoute from './Public/PublicRoute'

export default function (props) {
  const [isLoggedin] = React.useState(true)


  return (
    <>
      {
         isLoggedin === true ? <PrivateRoute/> : <PublicRoute/>
      }
    </>
  )
}
