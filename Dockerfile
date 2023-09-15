FROM node:18.16.0
 
USER 0
 
RUN mkdir -p /home/node/short-url-service
WORKDIR /home/node/short-url-service