FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install -g server
EXPOSE 3000
CMD [ "serve", "-s", "." ]