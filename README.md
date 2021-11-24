# express-auth-jwt
Learning Auth using JWT

Endpoint
- /auth/register (POST) : to registering a new account
- /auth/login (POST) : to login to your account and generate a new token
- /users/profile (GET) : to show user detail that currently login (need token authorization)
- /users (GET) : to show all user that has been already registered (need token authorization)

Heroku App
```sh
https://express-auth-jwt.herokuapp.com/
```

Local Installation
1. Edit .env file:
```sh
DB_USERNAME=postgres
DB_PASSWORD=password
DB_NAME=demo-auth-jwt
DB_HOST=127.0.0.1
DB_PORT=5432
JWT_SECRET=Zx-5qkTJaxYxR2UGXT8WzJ0Aqioa9ctLer6feBXMPQ0
```
3. Create database
```sh
npx sequelize-cli db:create
```
3. Migration database
```sh
npx sequelize-cli db:migrate
```
