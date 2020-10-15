import { Box } from "@chakra-ui/core"
import  Router,{useRouter}  from "next/router"
import React, { useEffect, useState } from "react"
import NextLink from 'next/link'
import { FindPostsInTitleDocument, useFindPostsInTitleQuery, useMeQuery } from "../../../generated/graphql"
import { withApollo } from "../../../utils/withApollo"
import EditDeleteButtons from "../../../components/EditDeleteButtons"

interface searchProps { }

// const getParams()

const searchTitle: React.FC<{}> = () => {
    const router = useRouter();
    const me = useMeQuery()
    const [val, setVal] = useState("");
    const {data,loading} = useFindPostsInTitleQuery({
        variables:{title:val}
    });
    const ME = me.data?.me
    useEffect(() => {
        console.log(data)
        if (router.query.value) {
            setVal(router.query.value as string)
        }
        
    })
    

    useEffect(() => {
    setTimeout(() => {
        let allItems
        //
    function resizeGridItem(item) {
    let grid = document.getElementsByClassName("grid")[0];
    let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    let rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
    }
        allItems = document.getElementsByClassName("item");
        //
    function resizeAllGridItems(){
      allItems = document.getElementsByClassName("item");
    for(let x=0;x<allItems.length;x++){
        resizeGridItem(allItems[x]);
    }
  }
    // for (let x = 0; x < allItems.length; x++) {
    //   imagesLoaded(allItems[x], resizeInstance);
    // }
  function resizeInstance(instance){
   let item = instance.elements[0];
   resizeGridItem(item);
  }
  window.onload = resizeAllGridItems() as any
  window.addEventListener("resize", resizeAllGridItems);      
  }, 400);

  },[])



    return data?.findPostsInTitle? (
    <>
      <style jsx global>{`
        .index-card:hover{
            opacity: 1 !important;
            color:white;
            transition: .5s;
        }
        .index-thumbnail{
            opacity: 1 !important;
            cursor:pointer;
            transition:.2s;
        }
        .index-card:hover .index-thumbnail{
            transform: translateY(-10px);
        }
        .index-post-title{
            cursor:pointer;
        }
        .index-post-tag{
          cursor:pointer;
        }
        .index-post-tag:hover{
          text-decoration: underline;
        }
        @media screen and (max-width: 900px) { 
          .grid{
          grid-template-columns: repeat(auto-fill, 48%) !important;
          }
          .index-greeting{
            font-size: 14px !important;
          }
        }
        @media screen and (max-width: 600px) { 
          .grid{
          grid-template-columns: repeat(auto-fill, 98%) !important;
          }
          .index-greeting{
            font-size: 14px !important;
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
                <Box mt="200px" mb="200px">
                    검색어: {val}<br/>
                    검색결과: {data.findPostsInTitle.length}개
                </Box>
                
        <Box
          className="grid"
          w="100%"
          h="auto"
          maxW="1100px"
          style={{
            display: "grid",
            gridGap: "10px",
            gridTemplateColumns: 'repeat(auto-fill,32%)',
            gridAutoRows: "40px",
          }}
                >
          {data.findPostsInTitle.map((post) => (
            <Box
              className="index-card item"
              borderRadius="5px"
              borderTopLeftRadius="5px"
              borderTopRightRadius="5px"
              w="100%"
              h="55%"
              ml="3%"
              mb="40px"
              display="flex"
              justifyContent="center"
              flexDirection="column"
              position="relative"
              textAlign="center"
              backgroundSize="100%"
              
            >
          <div className="content">
              <NextLink href={`/post/${post.id}`}>
                <Box>
                  <img
                    width="100%"
                    height="100%"
                    className="index-thumbnail"
                    src={`${post.thumbnail}`}
                    style={{borderRadius:"5px"}}
                    />                   
                  <Box className="index-post-title" textAlign="start"  fontSize="24px">
                    {post.title}
                  </Box>
                  </Box>
              </NextLink>
              <Box w="100%" mt="5px" justifyContent="start" display="flex" flexWrap="wrap" fontSize="8px">
                {!post.tags ? " " : (post.tags.map((t) =>
                  <NextLink href={`/tag/${t.id}`}>
                      <Box className="index-post-tag" textAlign="center" border="1px solid #ccc" borderRadius="5px" m="5px" p="5px">
                        {t.text}
                      </Box>
                  </NextLink>
                )
                )}
              </Box>
              <Box className="index-post-time" userSelect="none"  p="20px" fontSize="8px" textAlign="end">
                {post.createdAt.slice(0, 10)}
              </Box>
            </div>


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
export default withApollo({ ssr: false })(searchTitle)