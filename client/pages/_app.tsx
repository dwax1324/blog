import { Box, Button, ThemeProvider } from "@chakra-ui/core"
import Head from "next/head"
import React, { useEffect, useRef, useState } from "react"
import Auth from "../components/Auth"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import "../styles/globals.css"
import customTheme from "../utils/theme"

function MyApp({ Component, pageProps }) {
  const [dark, setDark] = useState("dark")
  const color = useRef(null)
  useEffect(() => {
    if (localStorage.getItem("sid") === null) {
      localStorage.setItem("sid", "light")
    } else if (localStorage.getItem("sid") === "dark") {
      localStorage.setItem("sid", "dark")
      setDark('dark')
    }
  }, [])

  useEffect(() => {
    if (dark === 'dark') {
      color.current.style.backgroundColor = "#111"
      color.current.style.color = "#aaa"
      document.getElementsByTagName('html')[0].style.backgroundColor="#111"
    }
    else if (dark === 'light') {
      color.current.style.backgroundColor = "#fff"
      color.current.style.color = "#000"
      document.getElementsByTagName('html')[0].style.backgroundColor="#fff"
    }

  }, [dark])

  const handleColor = () => {
    const localItem = localStorage.getItem("sid")
    if (localItem === "light") {
      localStorage.setItem("sid", "dark")
      setDark('dark')
    } else if (localItem === 'dark') {
      localStorage.setItem("sid", "light")
      setDark('light')
    }
  }
  return (
    <ThemeProvider theme={customTheme}>
      <Box
        backgroundColor="black"
        color="white"
        onClick={handleColor}
        position="fixed"
        right="55px"
        top="80%"
        fontSize="20px"
        outline="none"
        w="1px !important"
        h="1px"
        cursor="pointer"
        transition="1s"
        userSelect="none"
      >
        {dark === 'light' ? '🌞' : '🌕'}

      </Box>
      <Head>
        <title>wooo's blog</title>
      </Head>
      <Box
        ref={color}
        transition=".4s"
        minHeight="100vh"
        wordBreak="break-all"
        overflowX="hidden"
      >
        <NavBar />
        <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@600&display=swap');
       a, article, aside, audio, blockquote, body, button, canvas, code, div, em, embed, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, html, i, iframe, img, input, ins, kbd, label, legend, li, main, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strong, summary, sup, table, tbody, td, textarea, time, ul, video 
       {
       font-family: 'Noto Sans KR', sans-serif;
       scroll-behavior: smooth;
       font-weight: 300;
       margin:0;
       padding:0;
       }
       ::-moz-selection { /* Code for Firefox */
        background: #ccc;
      }

      ::selection {
          background: #ccc;
      }
      body::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}
body::-webkit-scrollbar-track {
  background: black;        /* color of the tracking area */
}
body::-webkit-scrollbar-thumb {
  background-color: #333;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
}
      }

      `}</style>
        <Auth/>
          <Component {...pageProps} />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default MyApp
