import { Box } from "@chakra-ui/core"
import React from "react"
import NavBar from "../components/NavBar"
import { withApollo } from "../utils/withApollo"

interface aboutProps { }
const about: React.FC<{}> = () => {
  return (
    <Box w="100vw" h="100vh" display="flex" justifyContent="center" alignItems='center'>
      <Box w="400px" h="400px" border="1px solid black" display="flex" justifyContent="center" alignItems="center">
      </Box>
    </Box>
  )
}
export default withApollo({ ssr: false })(about)
