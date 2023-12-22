# M295 Leistungsbeurteilung B
## Description
With this project you can create, edit and delete tasks. Also there is a small login system.
## Setup:
For this project you need Docker and Postman. You need a NodeJS & JavaScript Container and the Postman Desktop version.
## Start:
1. Write the command "npm run dev"
2. Now you can open "localhost:3001/tasks"
   
## Functions
1. GET /tasks Endpoint, which returns a list of all tasks
2. POST /tasks Endpoint, which creates a new task and returns it
3. GET /task/{id} endpoint, which returns a single task
4. PUT /task/{id} endpoint, which changes the existing task and returns it 
5. DELETE /task/{id} endpoint, which deletes the existing task

There is also a small login system:

6. POST /login endpoint, which receives the credentials, checks them and returns a token or cookie. 
7 GET /verify Endpoint, which checks a token or cookie for validity and returns the result.
8. DELETE /logout Endpoint, which marks the token or cookie provided as invalid
   
## Author
-[David Thomann]https://github.com/davidthomannn
