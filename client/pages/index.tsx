import React from "react"
import { useMeQuery, usePostsQuery } from "../generated/graphql"
import NextLink from "next/link"
import { withApollo } from "../utils/withApollo"
import { Box, Text, Image, Link } from "@chakra-ui/core"
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
          .index-image{
              width: 90% !important;
          }
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
        <Image className="index-image" src="/main.jpg" w="75%" h="75%" mt="50px" mb="50px" maxW="1000px" />
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
            >
              <NextLink href="/:id" as={`/post/${post.id}`}>
                <Link >
                  <Image objectFit="cover" src={post.thumbnail} style={{ borderRadius: "50%", maxWidth: "100px", height: "100px" }} alt="thumnail" />
                  <Box className="editTitle">
                    <Text>{post.title}</Text>
                  </Box>
                </Link>
              </NextLink>
              <Box cursor="pointer" >
                <Text>{post.createdAt.slice(0, 10)}</Text>
              </Box>
              <Box w="80%" justifyContent="center" display="flex" flexWrap="wrap">
                {!post.tags ? " " : (post.tags.map((t) =>
                  <NextLink href="/:id" as={`/tag/${t.id}`}>
                    <Link>
                      <Box textAlign="center" border="1px solid #333" borderRadius="5px" m="5px" p="5px">
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
