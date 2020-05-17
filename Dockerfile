FROM node:12-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
RUN npm install nodemon -g

EXPOSE 11000
CMD ["npm","start"]