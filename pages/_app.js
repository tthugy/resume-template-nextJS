import '../styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from "next/router"


function MyApp({ Component, pageProps }) {

  return (
    <div className="component">
      <Head>
        <title>Resume/Lorem ipsum</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
        <meta name="title" property="og:title" content="홍길동 (Lorem ipsum)" />
        <meta name="description" property="og:description" content="🚀 Resume / DevOps Engineer" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
