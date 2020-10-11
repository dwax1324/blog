import { Box, Button, ThemeProvider } from "@chakra-ui/core"
import Head from "next/head"
import React, { useEffect, useRef, useState } from "react"
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
    }
    else if (dark === 'light') {
      color.current.style.backgroundColor = "#fff"
      color.current.style.color = "#000"
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
      @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@600&display=swap');
       html,body{
       font-family: 'Noto Serif KR', serif;
       scroll-behavior: smooth;
       }
       ::-moz-selection { /* Code for Firefox */
        color: red;
        background: yellow;
      }

      ::selection {
          background: #ccc;
      }
      }

      `}</style>
        <Component {...pageProps} />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default MyApp
