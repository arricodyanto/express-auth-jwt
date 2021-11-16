# express-auth-jwt
Learning Auth using JWT

Endpoint
- /auth/register (POST) : to registering a new account
- /auth/login (POST) : to login to your account and generate a new token
- /users/profile (GET) : to show user detail that currently login (need token authorization)
- /users (GET) : to show all user that has been already registered (need token authorization)

Instalasi
1. Edit port db to 5430 in .env file
2. Create database
```sh
npx sequelize-cli db:create
```
3. Migration database
```sh
npx sequelize-cli db:migrate
```

or
```sh
npx sequelize-cli db:seed:all
```
