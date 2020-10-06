import React, { useRef } from "react"
import NextLink from "next/link"
import { Box, Button, PseudoBox } from "@chakra-ui/core"
import {
  useCreatePostMutation,
  useLogoutMutation,
  useMeQuery,
} from "../generated/graphql"
import Router from "next/router"
import { withApollo } from "../utils/withApollo"

interface NavBarProps { }

const NavBar: React.FC<{}> = () => {
  const { data, loading } = useMeQuery()
  const [createPost] = useCreatePostMutation()
  const [logout] = useLogoutMutation()
  const img = useRef(null)
  const router = Router

  const handleClick = async () => {
    const data = await logout()
    console.log(data)
    router.reload()
  }

  const handleRotate = () => {
    console.log(1)
    img.current.style.transition = ".4s"
    img.current.style.transform = "rotate(20deg)"
    setTimeout(() => {

      img.current.style.transform = "rotate(0deg)"
    }, 400);

  }

  console.log(data?.me)
  return (

    <>
      <style jsx global>{`

        @media screen and (max-width: 768px) { 
          .navbar-logo{
          }
          .navbar-tags{
            display:none !important;
          }
          .navbar-about{
            display:none;
          }
          .navbar-searchbar{
            display:none;
          }
        }
      `}</style>
      <Box
        p={"absolute"}
        w={"100vw"}
        h={"80px"}
        backgroundColor={"#333"}
        display={"flex"}
      >
        <Box className="navbar-logo" style={{ cursor: "pointer", color: "#fff" }} m="auto">
          <NextLink href="/">
            <PseudoBox display="flex" onMouseEnter={handleRotate} userSelect="none">
              <img ref={img} src="/logo.png" style={{ width: "30px" }} />
              <Box color="white">wooo's blog</Box>
            </PseudoBox >
          </NextLink>
        </Box>
        <Box className="navbar-tags" display="flex" justifyContent="space-evenly" margin="auto">
          <Box style={{ color: "#fff" }} m="auto" mr="10%" minWidth="100px">
            <NextLink href="/tags">TAGS</NextLink>
          </Box>
          <Box className="navbar-about" style={{ color: "#fff" }} m="auto" mr="10%" minWidth="100px">
            <NextLink href="/about">ABOUT</NextLink>
          </Box>
          <Box m="auto" className="navbar-searchbar">
            <input
              placeholder="🔍"
              style={{
                outline: "none",
                width: "7vw",
                textIndent: "5px",
                height: "30px",
                fontSize: "15px",
              }}
            ></input>
          </Box>
        </Box>
        {data?.me ? (
          <>
            <NextLink href="rel">
              <Button
                p="absolute"
                right="15px"
                mt="25px"
                w="50px"
                h="50px"
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
                p="absolute"
                right="15px"
                mt="25px"
                w="100px"
                h="50px"
                variantColor="green"
                textAlign="center"
                fontWeight="bolder"
                cursor="pointer"
              >
                Post
            </Button>
            </NextLink>
            <Button
              p="absolute"
              right="15px"
              mt="25px"
              variantColor="red"
              w="100px"
              h="50px"
              textAlign="center"
              onClick={handleClick}
              fontWeight="bolder"
              cursor="pointer"
            >
              LOGOUT
          </Button>
          </>
        ) : (
            "ㅤ"
          )}
      </Box>
    </>
  )
}

export default withApollo({ ssr: false })(NavBar)
