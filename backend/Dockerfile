FROM node:18


WORKDIR /app

RUN npm install yarn

COPY ./backend .


EXPOSE 5000

RUN yarn install

CMD yarn start
