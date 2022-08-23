# Stage 0, "build-stage", based on Node.js to build the frontend
FROM node:16.17-alpine as build
WORKDIR /app
COPY package*.json /app/
RUN yarn cache clean && yarn --update-checksum
COPY . /app/
RUN yarn && yarn build

# Stage 1, based on NGINX to provide a configuration to be used with react-router
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
