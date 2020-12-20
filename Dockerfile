FROM node:14.13.0-alpine3.11 as build-deps

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json yarn.lock ./
RUN yarn install
COPY . ./

# start app
CMD ["npm", "start"]