## BLOG 

*USED SORCES*

*2020-09-19*
---
블로그 개설🎉

strapi, react을 사용하여 만들었다.
backend는 헤로쿠 , frontend는 깃헙페이지의 서비스를 이용함.

현명한 사람이라면 시중에 나와있는 서비스로 글을 쓰겠지만

모든 설정을 내가한 나만의 블로그를 가져보고 싶어서 시작하게됐다.

*2020-09-22*
---

strapi를 nodejs로 바꾸었다.
strapi도 충분히 좋았지만 
데이터가 있는 페이지 로딩이 꽤나 오래걸려서 이게 헤로쿠문제인지 
strapi문제인지 몰라서 일단 공부도 할겸 nodejs로 바꾸었다.
결과는 살짝 빨라진거 같다.

![strapi](readme_srcs/speed-strapi.gif)


로딩하는데 1~2초정도 걸림

![strapi](readme_srcs/speed-node.gif)


약간 빨라진거같다.(아닌가?)

하지만 바꾸게 된 가장 결정적인 이유는 md포맷을 사용해 포스팅해야해서
어디서 복사 붙혀넣기만해도 글이 와장창 깨져버린다..

nodejs에 ckeditor4를 설치해 사용중인데 만족스럽다.
reactMarkdown을 사용해서 일일히 함수를 사용해 파싱했었는데
이제는 html-parse만 해주면 된다.

추가할 것:


pagination, search, tags , about



현재 사용 중 기술:

express-js, mongoDB, react

나중에 써봤으면 하는 기술: 


typescript, aws ec2, 도커, 아폴로, grapql, nestjs


