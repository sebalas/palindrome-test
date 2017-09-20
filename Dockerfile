FROM node:8.5.0-alpine

MAINTAINER Sébastien Mailhot <sebastien.mailhot@geeked.ca>

WORKDIR /usr/src/app

COPY package.json .
ADD src ./src

RUN npm install

ENTRYPOINT [ "npm" ]