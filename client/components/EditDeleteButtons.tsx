import { Box, Button, Icon, IconButton } from "@chakra-ui/core"
import React, { Props } from "react"
import NextLink from "next/link"
import { useDeletePostMutation } from "../generated/graphql"
import Router from "next/router"

interface EditDeleteButtonsProps {
  postId: number
  title?: string
}

const EditDeleteButtons: React.FC<EditDeleteButtonsProps> = ({
  postId,
  title,
}) => {
  const router = Router
  const [deletePost] = useDeletePostMutation()
  const handleClick = () => {
    const div = document.createElement("div")
    const text = document.createTextNode(`정말로 지우겠습니까?${title}`)

    document.body.appendChild(div)

    alert("지워집니다")
    deletePost({
      variables: { postId: postId },
    })
    router.reload()
  }
  return (
    <>
      <IconButton
        aria-label="delete"
        variantColor="red"
        border="none"
        position="absolute"
        size="xs"
        top="0px"
        right="0px"
        icon="delete"
        borderRadius="2px"
        cursor="pointer"
        onClick={handleClick}
      />
      <NextLink href="/:id" as={`/edit/${postId}`}>
        <IconButton
          aria-label="edit"
          border="none"
          position="absolute"
          variantColor="teal"
          top="0px"
          right="20px"
          icon="edit"
          size="xs"
          borderRadius="2px"
          cursor="pointer"
        />
      </NextLink>
    </>
  )
}

export default EditDeleteButtons
