FROM node:8.9.1

RUN mkdir -p /usr/src/printpartshop

COPY dist /usr/src/printpartshop/app

COPY authMiddleware.js /usr/src/printpartshop/
COPY data.js /usr/src/printpartshop/
COPY deploy-server.js /usr/src/printpartshop/server.js
COPY deploy-package.json /usr/src/printpartshop/package.json

WORKDIR /usr/src/printpartshop

RUN npm install

EXPOSE 3000
EXPOSE 3500

CMD ["npm", "start"]
