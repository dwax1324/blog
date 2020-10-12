import React, { useEffect } from "react"
import { useMeQuery, usePostsQuery } from "../generated/graphql"
import NextLink from "next/link"
import { withApollo } from "../utils/withApollo"
import { Box,  Image, Link } from "@chakra-ui/core"
import EditDeleteButtons from "../components/EditDeleteButtons"
import imagesLoaded from 'imagesloaded'

interface homeProps { }

export interface RequestInfo {
  data: string
}

const Home: React.FC<{}> = () => {
  const { data, loading } = usePostsQuery()
  const me = useMeQuery()

  let vh;
  useEffect(() => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  },)
  if (!loading && !data) {
    return <div>sorry, somthing happend</div>
  }
  const ME = me.data?.me

  const renderGreeting = () => {
    const hour = new Date().getHours()
    const minute = new Date().getMinutes()
    const time = hour * 60 + minute;
    if (time >= 1230 ||  time < 330) {
      return '좋은 밤입니다.'
    } else if (time >=330 && time < 660) {
      return '좋은 아침입니다.'
    } if (time >= 660 && time < 780) {
      return '활기찬 점심 보내세요.'
    } else if (time >= 780 && time < 1150) {
      return '좋은 오후입니다.'
    } else if (time >= 1150 && time < 1230) {
      return '좋은 저녁입니다.'
    }
    return '좋은 하루입니다.'
  }


  
  useEffect(() => {
    setTimeout(() => {
        let allItems
        //
    function resizeGridItem(item) {
    console.log(item)
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
      console.log(allItems[0])
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



  return data?.posts ? (
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
        <Box
          className="index-mainImg"
          backgroundAttachment="fixed"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundImage="url('/main.jpg')"
          display="flex"
          justifyContent="center"
          alignItems="center"        
          w="100vw"
          mb="300px"
          userSelect="none"
          style={{ height: 'calc(var(--vh,1vh)*100)', opacity: .9 }}
          top="0px"
          // position="absolute"
        >
          <Box className="index-greeting"
            style={{ opacity: 1, fontSize:'2em' ,color:"#999"}}>
              {renderGreeting()}
          </Box>
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
          {data.posts.map((post) => (
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

export default withApollo({ ssr: true })(Home)
