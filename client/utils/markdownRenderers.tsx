import { Box } from "@chakra-ui/core"
import React, { useRef } from 'react'
import SyntaxHighlighter from "react-syntax-highlighter"
import dark from "react-syntax-highlighter/dist/cjs/styles/hljs/a11y-dark"


export const handleLink = (props) => {
    const href = useRef(null)
    const handleEnter = () => {
        href.current.style.color = "#090"
    }
    const handleLeave = () => {
        href.current.style.color = "#00c"
    }
    return (
        <span ref={href} style={{ color: '#00c' }}>
            <a href={`${props.href}`} target="_blank">
                {props.href}
            </a>
        </span>
    )

}









export const handleCode = ({ value, language }) => {
    return (
        <Box lineHeight={"20px"} fontWeight={"500"} fontSize="12px">
            <SyntaxHighlighter
                showLineNumbers={true}
                startingLineNumber={1}
                language={language ?? null}
                style={dark}
                lineNumberStyle={{ color: "#ddd", fontSize: 12 }}
                wrapLines={true}
            >
                {value ?? null}
            </SyntaxHighlighter>
        </Box>
    )
}



export const handleImage = ({ alt, src, title }: { alt?: string, src?: string, title?: string }) => (
    <a href={`${src}`} target="_blank">
        <img
            alt={alt}
            src={src}
            title={title}
            style={{
                maxWidth: "90%",
                margin: "40px auto",
                display: "table",
            }}
        />
    </a>
)
