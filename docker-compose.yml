version: '3.7'

services:
    webapp-server:
      build:
        context: .
        dockerfile: Dockerfile
      image: reviews-server-img
      container_name: reviews-server
      volumes:
       - .:/src/app
       - /src/app/node_modules
      ports:
        - "1128:1128"
      depends_on:
        - mongo
      env_file: .env
      environment:
        - MONGO_HOSTNAME=$MONGO_HOSTNAME
        - MONGO_PORT=$MONGO_PORT
        - MONGO_DB=$MONGO_DB
    mongo:
      image: mongo
      container_name: reviews-mongodb
      ports:
        - "27017:27017"