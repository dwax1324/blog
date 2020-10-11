import { Box, Button, Input, Link, Text } from "@chakra-ui/core"
import React, { useEffect, useRef, useState } from "react"
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
    const [postId, setPostId] = useState('')
    const [postTitle, setPostTitle] = useState('')
    const [tagId, setTagId] = useState('')
    const [tagTitle,setTagTitle] = useState('')

    const handleSubmitAdd = async () => {
        // e.preventDefault();
        const pi = parseInt(postId)
        const ti = parseInt(tagId)
        console.log(pi,ti)
        console.log(postId, tagId)
        const data = await add({
            variables: { tagId: ti, postId: pi }
        })
        alert('연결 성공!')
        router.reload();
    }

    const handleSubmitDelete = async () => {
        // e.preventDefault();
        const pi = parseInt(postId)
        const ti = parseInt(tagId)
        console.log(postId, tagId)
        await del({
            variables: { tagId: ti, postId: pi }
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

    const handleShowPost = (e) => {
        if (e.target.querySelectorAll('span')[1] === undefined) return;
        setPostId(e.target.querySelectorAll('span')[1].innerText)
        setPostTitle(e.target.querySelectorAll('span')[0].innerText)
    }

    const handleShowTag = (e) => {
        if (e.target.querySelectorAll('span')[1] === undefined) return;
        setTagId(e.target.querySelectorAll('span')[1].innerText)
        setTagTitle(e.target.querySelectorAll('span')[0].innerText)

    }
    return (
        <>

            <Box w="100vw" h="100vh" display="flex" justifyContent="center" alignItems='center'>
                <Box display="flex" flexDirection="column" >
                    POSTID
                            <Box w="200px" h="100px" ref={postEl} mt="20px"  >
                        {postId}<br/>
                        {postTitle}
                        </Box>
                            TAGID
                            <Box w="200px" h="100px" ref={tagEl} >
                        {tagId}<br />
                        {tagTitle}
                        </Box>

                    <Button variantColor="teal" onClick={handleSubmitAdd} mt="50px">add!</Button>
                    <Button variantColor="red" onClick={handleSubmitDelete} mt="20px">delete!</Button>
                </Box>
                <Box w="400px" h="400px" border="1px solid black" display="flex" justifyContent="center"  overflow="auto">
                    <Box >
                        {posts?.data?.posts?.map((t) => (
                                <Link onClick={handleShowPost}>
                            <Box border="1px solid black" p="40px">
                                    <span style={{pointerEvents:"none"}}>
                                            {t.title}
                                    </span>
                                    (id:
                                    <span style={{pointerEvents:"none"}}>
                                            {t.id}
                                    </span>
                                )<br />[{t?.tags?.map((t) => t.text + ',')}]
                                </Box>
                                </Link>
                        ))}
                    </Box>
                </Box>
                <Box w="400px" h="400px" border="1px solid black" display="flex" justifyContent="center"  overflow="auto">
                    <Box>
                        {data?.tags?.map((t) => (
                            <Link onClick={handleShowTag}>
                            <Box border="1px solid black" p="40px">
                                <span style={{pointerEvents:"none"}}>{t.text}</span>
                                (id:<span style={{pointerEvents:"none"}}>{t.id}</span>)
                                    </Box>
                                </Link>
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
