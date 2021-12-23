# RSTEAM CMS BACKEND with Nestjs & GraphQL

The `RSTEAM CMS BACKEND` created using [Nestjs](https://www.nestjs.com) & [GraphQL](https://www.graphql.org).

-   [Installation](#installation)
-   [Configuration](#configuration)
-   [Running the App](#Running-the-app)

## Installation

```bash
# git clone
$ git clone https://github.com/rsteam-dev/RS_CMS_Backend.git

# npm install
$ npm install
```

To use this CMS. you need to set `Reverse Proxy` to add User IP address.
If you use `Nginx`, you need to add this in `server` scope

```
location / {
    proxy_redirect off;
    proxy_pass_header Server;
    proxy_set_header Host $http_host;
    #this ip is needed
    proxy_set_header ip $remote_addr;
    proxy_set_header X-Scheme $scheme;
    #this is reverse proxy
    proxy_pass http://localhost:4000;
}
```

+ If you use `Nginx`, need to check `client_max_body_size`. in lightsail default 80M


## Configuration

**Configuration to use CMS**

You need to make file `.env` by using `.env.sample`

**Tip: Don't change name `.env.sample` to `.env` if you co-work**

## When using CMS for the first time, please follow the example below.

Set .env DATABASE_URL
```bash
$npx prisma db push --preview-feature

$npm run start:dev
```

## Check this for setting Storage
```
If you want to use s3 storge.

Create AWS account and connect to AWS S3 Management Console.

Create S3 Bucket, check .env sample and set the .env file.

Finally, enable 'default_s3_activation' in your Configuration Setting.
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


Enjoy!
