FROM node:9

COPY . .
RUN npm install

ENV YENV=production
RUN npm run make
ENV NODE_ENV=production
COPY . .

EXPOSE 3000

CMD npm run start
# CMD ["node",  "app.js"]