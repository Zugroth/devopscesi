from node:18

RUN npm i -g @nestjs/cli

# Create app directory
WORKDIR /usr/src/app

COPY . .

RUN npm install && nest build


EXPOSE 3000

ENTRYPOINT ["nest", "start", "dev"]