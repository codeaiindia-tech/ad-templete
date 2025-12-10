"use client"
import React, { useState } from 'react'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page2Style2 from './styles/Page2Style2'
import Page3 from './components/Page3'

const page = () => {

  const [status, setStatus] = useState(true)

  return (
    <>

    <Page1/>


    {/* page2 */}
    { status ? <Page2/> : <Page2Style2/>}

    {/* page3 */}

    <Page3/>

    </>
  )
}

export default page
