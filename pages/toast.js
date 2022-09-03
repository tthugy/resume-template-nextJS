import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect, useRef } from 'react';
import { BrowserView, MobileView, isBrowser, isMobile, isAndroid, isIOS } from "react-device-detect"
import Header from './header'
import Main from './main'

export default function Toast({ text, status }) {

  const Router = useRouter();

  const [toastStatus, setToastStatus] = useState(false);
  
  useEffect(()=> {
    if(isIOS){
      // console.log('ios');
    }
  },[])

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
