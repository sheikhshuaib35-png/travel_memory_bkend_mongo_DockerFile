FROM node:25-alpine3.22
WORKDIR /app
COPY . .
RUN npm install
ENV PORT=3001
ENV MONGO_URI="mongodb+srv://shuaib:shuaib%40123@shuaib.tog4jsl.mongodb.net/mydb"
EXPOSE 3001
CMD ["node", "index.js"]