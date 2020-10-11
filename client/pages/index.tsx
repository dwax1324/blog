import React from "react"
import { useMeQuery, usePostsQuery } from "../generated/graphql"
import NextLink from "next/link"
import { withApollo } from "../utils/withApollo"
import { Box,  Image, Link } from "@chakra-ui/core"
import EditDeleteButtons from "../components/EditDeleteButtons"

interface homeProps { }

export interface RequestInfo {
  data: string
}

const Home: React.FC<{}> = () => {
  const { data, loading } = usePostsQuery()
  const me = useMeQuery()

  if (!loading && !data) {
    return <div>sorry, somthing happend</div>
  }
  const ME = me.data?.me
  return data?.posts ? (
    <>
      <style jsx global>{`

        @media screen and (max-width: 768px) { 
          .index-card{
            width:100% !important;
          }
        }
      `}</style>
      <Box
        className="index-container"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box
          style={{opacity:.9}}
          backgroundAttachment="fixed"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundImage="url('/main.jpg')"
          display="flex"
          justifyContent="center"
          alignItems="center"        
          w="100vw" h="100vh"
          mb="300px"
          color="#999 ! important"
          userSelect="none"
        >
          <Box fontSize="50px" style={{opacity:1}}>
            welcome to <br/>
            wooo's blog
          </Box>
        </Box>
        <Box
          w="75%"
          h="auto"
          style={{
            display: "flex",
            alignItems: "left",
            justifyContent: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            flexFlow: "row wrap",
            alignContent: "flex-end",

          }}
        >
          {data.posts.map((post) => (
            <Box
              className="index-card"
              borderRadius="5px"
              border="1px solid grey"
              shadow=" 1px 1px 1px grey"
              boxShadow="2px 2px 5px rgba(0,0,0,0.5)"
              p="20px"
              w="45%"
              h="55%"
              ml="3%"
              mb="40px"
              display="flex"
              justifyContent="center"
              flexDirection="column"
              position="relative"
              textAlign="center"
              maxWidth="550px"
              backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScjkXFOUR2TU83Bi8evmfZNXOMDmiPbbGCkA&usqp=CAU')"
              backgroundSize="100%"
              color="white !important"
              textShadow="1px 1px 1px #333"
            >
              <NextLink href="/:id" as={`/post/${post.id}`}>
                <Link >
                  <Box w="100%" d="flex" justifyContent="center">
                    <Box style={{ border: '2px solid #000', width: "100px", height: "100px", borderRadius: "50%", padding: 0, margin: 0 }} boxShadow="2px 2px 5px rgba(0,0,0,0.5)">
                      <Image objectFit="cover" src={post.thumbnail}
                    
                        style={{ borderRadius: "50%", width: "96px", height: "96px" }} alt={undefined} />
                    </Box>
                  </Box>
                  <Box className="editTitle" mt="20px">
                    {post.title}
                  </Box>
                </Link>
              </NextLink>
              <Box userSelect="none"  p="20px" fontSize="8px">
                {post.createdAt.slice(0, 10)}
              </Box>
              <Box w="100%" justifyContent="center" display="flex" flexWrap="wrap" fontSize="8px">
                {!post.tags ? " " : (post.tags.map((t) =>
                  <NextLink href="/:id" as={`/tag/${t.id}`}>
                    <Link>
                      <Box textAlign="center" border="1px solid #ccc" borderRadius="5px" m="5px" p="5px">
                        {t.text}
                      </Box>
                    </Link>
                  </NextLink>
                )
                )}
              </Box>


              {ME ? (
                <EditDeleteButtons title={post.title} postId={parseInt(post.id)} />
              ) : (
                  ''
                )}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  ) : (
      <div></div>
    )
}

export default withApollo({ ssr: true })(Home)
