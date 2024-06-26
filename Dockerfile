FROM node:lts-alpine3.20

RUN apk add --update bash

# Setting the working directory
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# Building app
RUN npm run build

EXPOSE 80

# Running the app
CMD ["npm", "start"]