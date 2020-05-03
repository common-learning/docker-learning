FROM node:latest
RUN mkdir -p /home/node-mariadb/
WORKDIR /home/node-mariadb/
ADD . /home/node-mariadb
RUN npm i
CMD ["node", "index.js"]