import React, { useEffect, useRef, useState } from "react"
import Router from "next/router"
import { withApollo } from "../../utils/withApollo"
import { Formik, Form } from "formik"
import { useGetPostFromUrl } from "../../utils/useGetPostFromUrl"
import { Box, Button, Input, Textarea } from "@chakra-ui/core"
import NavBar from "../../components/NavBar"
import ReactMarkdown from "react-markdown"
import SyntaxHighlighter from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/cjs/styles/hljs"
import { useUpdatePostMutation } from "../../generated/graphql"

const edit: React.FC<{}> = () => {
  const router = Router
  const { data } = useGetPostFromUrl()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [thumbnail, setThumbnail] = useState("")
  const [mdState, setMdState] = useState(1)
  const [updatePost] = useUpdatePostMutation()
  const handleSubmit = async () => {
    console.log("handlesubmit")
    await updatePost({
      variables: {
        id: parseInt(data?.post.id),
        input: { title: title, description: description, thumbnail: thumbnail },
      },
    })
    router.push(`/post/${data?.post?.id}`)
    setTimeout(() => {

      router.reload()
    }, 1000);
  }

  const handleMd = () => {
    if (mdState === 1) {
      md.current.style.display = "none"
      setMdState(0)
    } else {
      md.current.style.display = "inline"
      setMdState(1)
    }
  }
  const md = useRef(null)

  useEffect(() => {
    if (data) {
      setTitle(data.post.title)
      setDescription(data.post.description)
      setThumbnail(data.post.thumbnail)
    }
  }, [data])
  return (
    <>
      <Box display="flex" justifyContent="center" mt="10vh">
        {!data ? (
          <div>ㅤ</div>
        ) : (
            <Box w="55%">
              <Formik
                initialValues={{
                  title: title,
                  description: description,
                  thumbnail: thumbnail
                }}
                onSubmit={handleSubmit}
              >
                <Form>
                  <Input
                    textAlign="center"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Input
                    textAlign="center"
                    value={thumbnail}
                    onChange={(e) => setThumbnail(e.target.value)}
                  />
                  <Textarea
                    h="100vh"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></Textarea>
                  <Button type="submit" ml="auto">
                    submit
                </Button>
                </Form>
              </Formik>
              <Button onClick={handleMd}>펼치기</Button>
              <Box ref={md}>
                <ReactMarkdown
                  source={description}
                  renderers={{
                    code: Component,
                  }}
                ></ReactMarkdown>
              </Box>
            </Box>
          )}
      </Box>
    </>
  )
}

const Component = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language ?? null} style={dark}>
      {value ?? ""}
    </SyntaxHighlighter>
  )
}

export default withApollo({ ssr: false })(edit)
