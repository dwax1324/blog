import { Box } from "@chakra-ui/core"
import React from "react"

const Footer: React.FC<{}> = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      fontSize="15px"
      display="flex"
      justifyContent="center"
      alignItems="flex-end"
      fontWeight="300"
    >
      <Box
        borderTop="1px solid #777"
        cursor="pointer"
        style={{ opacity: "0.7" }}
        p="20px"
      >
        ©{new Date().getFullYear()} wooo's blog
      </Box>
    </Box>
  )
}

export default Footer
