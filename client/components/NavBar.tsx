import React, { useEffect, useRef, useState } from "react"
import NextLink from "next/link"
import { Box, Button, PseudoBox } from "@chakra-ui/core"
import {
  useCreatePostMutation,
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
} from "../generated/graphql"
import Router from "next/router"
import {Form, Formik} from 'formik'
import { withApollo } from "../utils/withApollo"
import { Transform } from "stream"

interface NavBarProps { }

const NavBar: React.FC<{}> = () => {
  const { data, loading } = useMeQuery()
  const [login] = useLoginMutation();
  const [createPost] = useCreatePostMutation()
  const [logout] = useLogoutMutation()
  const [keyValue, setKeyValue] = useState('');
  const [width, setWidth] = useState(1000);
  const [opened, setOpened] = useState(false);
  const tagRef = useRef();
  const aboutRef = useRef();
  const searchRef = useRef();
  const boxRef = useRef();
  const img = useRef(null)
  const boxButton = useRef();
  const router = Router

  const handleClick = async () => {
    const data = await logout()
    router.reload()
  }

  const handleRotate = () => {
    img.current.style.transition = ".4s"
    img.current.style.transform = "rotate(20deg)"
    setTimeout(() => {

      img.current.style.transform = "rotate(0deg)"
    }, 400);
  }
  const handleMenu = () => {
    console.log(opened)
    if (!opened) {
      setOpened(true)
      boxRef.current.style.transform = "translate3d(350px,0,0)"
      boxButton.current.style.display = "none";
    } else {
      setOpened(false)
      boxRef.current.style.transform = "translate3d(-350px,0,0)"
      boxButton.current.style.display = "block";
    }


  }

  useEffect(() => {
    
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    })
    setWidth(window.innerWidth)
  },)
  const handleKeyPress = async (e) => {
    e.preventDefault();
    let a = keyValue.substring(0, 8);
    let b = keyValue.substring(8, 16);

    const data = await login({
      variables: {
        id: a,
        password:b
      }
    })  
    if (data.data.login) router.reload();
    else {
      router.push(`/search/title/${keyValue}`)
    }
  
  }


  return (
    <>
      <style jsx global>{`
        @media (max-width: 780px) {
        .navbar-logo{
        display:flex;
        justify-content: center;
        align-items: center;
        width:100vw;
        height:100%;
        }
          .navbar-tags {
            display: none !important;
          }
          .navbar-about {
            display: none !important;
          }
          .navbar-searchbar {
            display: none !important;
          }
        }
        .navbar-tags:hover {
          transition: 0.2s;
          color: white !important;
        }
        .navbar-about:hover {
          transition: 0.2s;
          color: white !important;
        }
        .navbar-box-home:hover {
          color: white !important;
          cursor: pointer;
        }
        .navbar-box-about:hover {
          color: white !important;
          cursor: pointer;
        }
        .navbar-box-tags:hover {
          color: white !important;
          cursor: pointer;
        }
      `}</style>
      <Box
        style={{ zIndex: 1, backgroundColor: "rgba(0,0,0,.5)" }}
        className="navbar-navbar"
        w="100vw"
        h="60px"
        display="flex"
        position="fixed"
      >
        {/* side box */}
        <Box
          transition=".3s"
          color="#ccc"
          className="navbar-box"
          ref={boxRef}
          w="350px"
          h="100vh"
          position="absolute"
          left="-350px"
          display="flex"
          flexDirection="column"
          style={{
            transition: ".5s",
            borderRight: "1px solid #333",
            backgroundColor: "rgba(10,10,10,.9)",
            zIndex: 5,
          }}
        >
          {/* close box */}
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            mt="10px"
            borderRadius="5px"
          >
            <Box h="50px">
              <Box display="flex" justifyContent="flex-end" cursor="pointer">
                <Box
                  ref={boxButton}
                  style={{ transition: "1s !important" }}
                  w="50px"
                  h="50px"
                  onClick={handleMenu}
                  cursor="pointer"
                  left="25px"
                >
                  <Box
                    w="30px"
                    h="4px"
                    style={{
                      backgroundColor: "#eee",
                      transform: "rotate(45deg)",
                      transformOrigin: "left",
                      position: "absolute",
                      marginLeft: "10px",
                      marginTop: "10px",
                      borderRadius: "10px",
                    }}
                  />
                  <Box
                    w="30px"
                    h="4px"
                    style={{
                      backgroundColor: "#eee",
                      transform: "rotate(-45deg)",
                      transformOrigin: "right",
                      position: "absolute",
                      marginTop: "10px",
                      marginLeft: "1px",
                      borderRadius: "10px",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          {/* BOX1 */}
          {/* home */}
          <Box
            display="flex"
            w="90%"
            justifyContent="center"
            flexDirection="column"
            backgroundColor="#333"
            mt="10px"
            borderRadius="5px"
            alignSelf="center"
          >
            <Box
              className="navbar-box-home"
              h="50px"
              onClick={handleMenu}
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
            >
              <NextLink href="/">
                <Box w="100%" p="5px">
                  Home
                </Box>
              </NextLink>
            </Box>
          </Box>
          {/* BOX2 */}
          {/* tags */}
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            backgroundColor="#333"
            mt="10px"
            borderRadius="5px"
            w="90%"
            alignSelf="center"
          >
            <NextLink href="/tags">
              <Box
                className="navbar-box-tags"
                h="50px"
                borderBottom="1px solid #000"
                onClick={handleMenu}
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                p="5px"
              >
                TAGS
              </Box>
            </NextLink>
            {/* about */}
            <NextLink href="/about">
              <Box
                className="navbar-box-about"
                h="50px"
                onClick={handleMenu}
                borderBottom="1px solid #000"
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                p="5px"
              >
                ABOUT
              </Box>
            </NextLink>
            <Box
              className="navbar-box-searchbar"
              h="50px"
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <form
                onSubmit={handleKeyPress}
                style={{ alignSelf: "center", opacity: ".5" }}
              >
                <input
                  type="text"
                  name="value"
                  onChange={(e) => setKeyValue(e.target.value)}
                  onSubmit={handleKeyPress}
                  placeholder="🔍"
                  style={{
                    margin: "0 auto",
                    outline: "none",
                    textIndent: "5px",
                    height: "30px",
                    fontSize: "15px",
                  }}
                ></input>
              </form>
            </Box>
          </Box>
        </Box>
        {/* side box button */}
        <Box
          ref={boxButton}
          style={{ transition: "1s !important" }}
          w="50px"
          h="50px"
          onClick={handleMenu}
          cursor="pointer"
          position="absolute"
          left="25px"
        >
          <Box
            w="30px"
            h="4px"
            style={{
              backgroundColor: "#eee",
              borderRadius: "5px",
              padding: "2px",
              marginTop: "18px",
              marginLeft: "1px",
            }}
          />
          <Box
            w="30px"
            h="4px"
            style={{
              backgroundColor: "#eee",
              borderRadius: "5px",
              padding: "2px",
              marginTop: "5px",
              marginLeft: "1px",
            }}
          />
          <Box
            w="30px"
            h="4px"
            style={{
              backgroundColor: "#eee",
              borderRadius: "5px",
              padding: "2px",
              marginTop: "5px",
              marginLeft: "1px",
            }}
          />
        </Box>

        {/* logo */}
        <Box className="navbar-logo" m="auto">
          <NextLink href="/">
            <PseudoBox
              display="flex"
              onMouseEnter={handleRotate}
              userSelect="none"
              cursor="pointer"
            >
              <img ref={img} src="/logo.png" style={{ width: "30px" }} />
              <Box color="white">wooo's blog</Box>
            </PseudoBox>
          </NextLink>
        </Box>
        <Box
          ref={tagRef}
          display="flex"
          justifyContent="space-evenly"
          margin="auto"
        >
          <Box className="navbar-tags" m="auto" mr="10%" minWidth="100px">
            <NextLink href="/tags">TAGS</NextLink>
          </Box>
          <Box
            ref={aboutRef}
            className="navbar-about"
            m="auto"
            mr="10%"
            minWidth="100px"
          >
            <NextLink href="/about">ABOUT</NextLink>
          </Box>
          <Box m="auto" ref={searchRef} className="navbar-searchbar">
            <form onSubmit={handleKeyPress}>
              <input
                type="text"
                name="value"
                onChange={(e) => setKeyValue(e.target.value)}
                onSubmit={handleKeyPress}
                placeholder="🔍"
                style={{
                  outline: "none",
                  width: "7vw",
                  textIndent: "5px",
                  height: "30px",
                  fontSize: "15px",
                }}
              ></input>
            </form>
          </Box>
        </Box>
        {data?.me ? (
          <Box position="fixed" right="0px" top="30px">
            <NextLink href="rel">
              <Button
                p="fixed"
                right="15px"
                mt="25px"
                w="50px"
                h="25px"
                variantColor="teal"
                textAlign="center"
                fontWeight="bolder"
                cursor="pointer"
              >
                R
              </Button>
            </NextLink>
            <NextLink href="newPost">
              <Button
                p="fixed"
                right="15px"
                mt="25px"
                w="50px"
                h="25px"
                variantColor="green"
                textAlign="center"
                fontWeight="bolder"
                cursor="pointer"
              >
                N
              </Button>
            </NextLink>
            <Button
              p="fixed"
              right="15px"
              mt="25px"
              variantColor="red"
              w="50px"
              h="25px"
              textAlign="center"
              onClick={handleClick}
              fontWeight="bolder"
              cursor="pointer"
            >
              L
            </Button>
          </Box>
        ) : (
          "ㅤ"
        )}
      </Box>
    </>
  )
}

export default withApollo({ ssr: false })(NavBar)
