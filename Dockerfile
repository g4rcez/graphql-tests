FROM node:13.2
WORKDIR /usr/src/app

COPY . ./
RUN yarn
RUN yarn build
ENTRYPOINT [ "yarn", "run", "serve" ]