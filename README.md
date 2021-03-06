## Installation

```bash
# git clone
$ git clone https://github.com/yoonsangwon0312/glowdayz.git

# npm install
$ npm install
```

## Prisma

```bash

$ npx prisma introspect

$ npx prisma generate

```

## Configuration

You need to make file `.env` by using `.env.sample`

**Tip: Don't change name `.env.sample` to `.env` if you co-work**

Set .env DATABASE_URL

```bash

$ npm run start:dev

```

## Running the app

### If you work on local

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### If you work on server

You need to use `pm2`

#### Install PM2

```bash
# if root
$ npm i -g pm2

# if need permission
$ sudo npm i -g pm2
```

#### Start Server

```bash
# development
$ sudo pm2 start npm -- run start  --name "server"

# watch mode
$ sudo pm2 start npm -- run start:dev  --name "server"

# production mode
$ sudo pm2 start npm -- run start:prod  --name "server"
```
