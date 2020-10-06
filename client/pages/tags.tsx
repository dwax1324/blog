import { Box, Link, Text } from "@chakra-ui/core"
import React, { useEffect } from "react"
import NavBar from "../components/NavBar"
import { useTagsQuery } from "../generated/graphql"
import { withApollo } from "../utils/withApollo"
import NextLink from "next/link"

interface tagsProps { }

const tags: React.FC<{}> = () => {
  const { data, loading } = useTagsQuery()
  if (!data && !loading) return <div>server error</div>

  let tags = data?.tags


  return (
    <>
      <Box w="100vw" h="100vh" display="flex" justifyContent="center" alignItems='center'>
        <Box w="400px" h="400px" border="1px solid black" display="flex" justifyContent="center" alignItems="center">
          <Box>
            {data?.tags?.map((t) => (
              <NextLink href="/:tagId" as={`/tag/${[t.id]}`}>
                <Link>
                  <Text>{t.text}({t.postsLength})</Text>
                </Link>
              </NextLink>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  )
}
export default withApollo({ ssr: true })(tags)
