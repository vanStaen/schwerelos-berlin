# Fetching the latest node image on alpine linux
FROM node:17-alpine AS builder
# Declaring env
ENV NODE_ENV production
# Setting up the work directory
WORKDIR /app
# Installing dependencies
COPY ./package.json /app
RUN npm install
# Copying all the files in our project
COPY . .
# Creating the build folder
CMD npm run buikd start

FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]