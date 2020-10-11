import { Box } from "@chakra-ui/core"
import React from "react"
import ReactMarkdown from "react-markdown"
import EditDeleteButtons from "../../components/EditDeleteButtons"
import { useMeQuery } from "../../generated/graphql"
import { useGetPostFromUrl } from "../../utils/useGetPostFromUrl"
import { withApollo } from "../../utils/withApollo"
import { handleImage, handleCode, handleLink } from '../../utils/markdownRenderers'
import Router from "next/router"
interface postPagesProps<> { }

const PostPage: React.FC<postPagesProps> = (props) => {
  const { data, loading } = useGetPostFromUrl()
  const me = useMeQuery()
  const Me = me.data?.me
  const router = Router
  return (
    <>
      <style jsx global>{`

        @media screen and (max-width: 768px) { 
          .postId-title{
            font-size:24px !important;
          }
          .postId-time{
            font-size:14px !important;
          }
          .postId-description{
            width: 100vw !important;
            
          }
        }
      `}</style>
      {Me ? (
        <Box position="fixed" right="15px" top="45vh">
          <EditDeleteButtons postId={parseInt(data?.post?.id)} />{" "}
        </Box>
      ) : (
          <div />
        )}
      <Box display="flex" justifyContent="center" mt="20vh">
        <Box
          className="edit-container"
          minWidth="100vw"
          w="55%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          p="25px"
        >
          <Box
            className="postId-title"
            w="65%"
            borderBottom="1px solid #666"
            p="50px"
            textAlign="center"
            fontSize="42px"
          >
            {data?.post?.title}
          </Box>
          <Box className="postId-time" w="100%" width="inherit" textAlign="end" mt="50px">
            {data?.post.createdAt.slice(0, 10)}
          </Box>
          <Box className="postId-description" p="20px" mt="5%" textAlign="left" w="768px" lineHeight="150%" >
            <ReactMarkdown
              escapeHtml={false}
              source={data?.post?.description}
              renderers={{
                code: handleCode,
                image: handleImage,
                link: handleLink
              }}
            ></ReactMarkdown>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default withApollo({ ssr: true })(PostPage)