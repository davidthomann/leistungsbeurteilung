# Description

This is a small program for the M295. In this program you can add, delete oder edit tasks with Postman.
For this project i used NodeJS and Express.

## Installation

To start the project you need this command:

```bash
npm run dev
```

## Commands

To see all tasks:
```bash
GET localhost:3001/tasks
```
To add a task
```bash
POST localhost:3001/tasks/{id}
```
To edit a task
```bash
PATCH localhost:3001/tasks/{id}
```
To delete a task:
```bash
DELETE localhost:3001/tasks/{id}
```
To Login use:
```bash
POST localhost:3001/login
```
To verify use:
```bash
GET localhost:3001/verify
```
To logout use:
```bash
DELETE localhost:3001/logout
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
