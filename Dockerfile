FROM node:12.18.3
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
COPY ./ ./
ENV NODE_ENV=production
RUN npm install
EXPOSE 8080
CMD npm run start

