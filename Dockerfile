FROM node:latest
RUN mkdir -p /opt/app 
WORKDIR /opt/app
#COPY ./myapp/package.json  ./
#WORKDIR /opt/app

COPY ./ ./
RUN npm install
ENV PORT 4002
EXPOSE   4002
CMD [ "npm", "run", "dev" ]
