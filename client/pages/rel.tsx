import { Box, Button, Input, Text } from "@chakra-ui/core"
import React, { useEffect, useRef } from "react"
import NavBar from "../components/NavBar"
import { useAddTagPostMutation, useCreateTagMutation, useDeleteTagMutation, useDeleteTagPostMutation, usePostsLazyQuery, usePostsQuery, useTagsQuery } from "../generated/graphql"
import { withApollo } from "../utils/withApollo"
import { Form, Formik } from "formik"
import Router from "next/router"



interface relProps { }

const rel: React.FC<{}> = () => {
    const { data, loading } = useTagsQuery()
    const posts = usePostsQuery()
    const [add] = useAddTagPostMutation();
    const [del] = useDeleteTagPostMutation();
    const [create] = useCreateTagMutation();
    const [deleteTag] = useDeleteTagMutation();
    if (!data && !loading) return <div>server error</div>

    const router = Router;
    const postEl = useRef(null)
    const tagEl = useRef(null)
    const tagNameOrId = useRef(null)

    const handleSubmitAdd = async () => {
        // e.preventDefault();
        const postId = parseInt(postEl.current.value)
        const tagId = parseInt(tagEl.current.value)
        console.log(postId, tagId)
        const data = await add({
            variables: { tagId: tagId, postId: postId }
        })
        alert('연결 성공!')
        router.reload();
    }

    const handleSubmitDelete = async () => {
        // e.preventDefault();
        const postId = parseInt(postEl.current.value)
        const tagId = parseInt(tagEl.current.value)
        console.log(postId, tagId)
        await del({
            variables: { tagId: tagId, postId: postId }
        })
        alert('삭제 성공!')
        router.reload();
    }


    const handleSubmitCreateTag = async () => {
        const tagName = tagNameOrId.current.value
        create({
            variables: { text: tagName }
        })
        alert('생성완료')
    }

    const handleSubmitDeleteTag = async () => {
        const tagId = parseInt(tagNameOrId.current.value)

        deleteTag({
            variables: { tagId: tagId }
        })
        alert('삭제완료')

    }
    return (
        <>

            <Box w="100vw" h="100vh" display="flex" justifyContent="center" alignItems='center'>
                <Box>
                    Relations
                </Box>
                <Box display="flex" flexDirection="column">
                    POSTID
                            <Input name="postId" ref={postEl} type="text" />
                            TAGID
                            <Input name="tagId" ref={tagEl} type="text" />

                    <Button variantColor="teal" onClick={handleSubmitAdd} mt="50px">add!</Button>
                    <Button variantColor="red" onClick={handleSubmitDelete} mt="20px">delete!</Button>
                </Box>
                <Box w="400px" h="400px" border="1px solid black" display="flex" justifyContent="center" alignItems="center">
                    <Box>
                        {posts?.data?.posts?.map((t) => (
                            <Text>{t.title}(id:{t.id})[{t?.tags?.map((t) => t.text + ',')}]</Text>
                        ))}
                    </Box>
                </Box>
                <Box w="400px" h="400px" border="1px solid black" display="flex" justifyContent="center" alignItems="center">
                    <Box>
                        {data?.tags?.map((t) => (
                            <Text>{t.text}(id:{t.id})</Text>
                        ))}
                    </Box>
                </Box>
                <Box display="flex" flexDirection="column">
                    CREATE TEXT/DELETE TAG ID
                            <Input name="tagId" ref={tagNameOrId} type="text" />

                    <Button variantColor="teal" onClick={handleSubmitCreateTag} mt="50px">create!</Button>
                    <Button variantColor="red" onClick={handleSubmitDeleteTag} mt="20px">delete!</Button>
                </Box>
            </Box>

        </>
    )
}
export default withApollo({ ssr: true })(rel)
