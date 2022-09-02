import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect, useRef } from 'react';
import Header from './header'
import Main from './main'

export default function Toast() {

  const [toastStatus, setToastStatus] = useState(false);

  const toastPop = () => {
    setToastStatus(true);

    setTimeout(()=> {
      setToastStatus(false);
    }, 1000)
  }

  return (
    <>
        <div className="">
        </div>
    </>
  )
}
