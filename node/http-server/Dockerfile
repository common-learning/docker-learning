FROM node:latest
RUN mkdir -p /home/http-server/
WORKDIR /home/http-server/
ADD . /home/http-server
RUN npm i
EXPOSE 3001
CMD ["node", "index.js"]