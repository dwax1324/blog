#!/bin/bash

echo version ?
read VERSION

docker build -t dwax1324/blog:$VERSION .
docker push dwax1324/blog:$VERSION 

ssh root@158.247.211.105 "docker pull dwax1324/blog:$VERSION && docker tag dwax1324/blog:$VERSION dokku/blog:$VERSION && dokku deploy blog $VERSION"