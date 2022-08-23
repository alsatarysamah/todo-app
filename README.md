# todo-app
A Web Application for securely managing a To Do List

# UML
[liveURLOnGithub](https://alsatarysamah.github.io/todo-app/)

[PR](https://github.com/alsatarysamah/todo-app/pull/1)

![](../todo-app/public/todoUML.png)

# Business Requirements
The To Do Manager application has the following overall requirements:

Designed to match the mock-up

- Header, Main Section Footer

- Use React Bootstrap for styling and visual components

The header should present the application title and main menu

- Home Link, which shows the list of To Do Items as noted below

- A Login/Register/User section

  - When a user is not logged in:

    - Show Login and Register links

      - Login: Renders a Login Form

        - Register: Renders a new user registration form

         - Require Fields:: Username, Password, Email, Role

- When a user is logged in:

    - Show “Welcome username”

    - Show a “Logout” link

     - When clicked, this should remove any cookies you have set and remove access

![](../todo-app/public/todo2.png)
# Technical Requirements
The application will be created with the following overall architecture and methodologies

React

ES6 Classes

Settings delivered to the application using 

Context

User Login & Permissions delivered to the 
application using Context

Local Storage / Cookies for storing login status

Local Storage / Cookies for storing user preferences

Superagent or Axios for performing API 

Requests

React Bootstrap for styling

Test Driven Development, using Jest

Tests will be runnable locally

Deployment to cloud provider