# CMPE 328 - Cloud Computing RESTful API with Web Server Deployment

**Homework #1**
**Author: Muhammad Abdullah Yusuf**
**Date: 19th March 2021**

## Introduction

This repository contains a CRUD API implementation following RESTful guidelines. The API is built using Node.js with the Express framework. It provides basic functionality without a solid UI to focus on the back-end service mechanism. Although Python with Flask was considered, it was not implemented for this project. The API has been thoroughly tested using Postman for sending HTTP requests. The deployment of the API is done with Heroku and Git, and it is available at: [https://simplerestfulregistryapi.herokuapp.com/](https://simplerestfulregistryapi.herokuapp.com/)

## API Routes

The API consists of the following routes:

- **GET** (/users) - Retrieves all users.
- **POST** (/users) - Creates a new user.
- **GET** (/users/:id) - Retrieves user details by ID.
- **DELETE** (/users/:id) - Deletes a user by ID.
- **PATCH** (/users/:id) - Updates or replaces user details by ID.

## File Structure

The API codebase includes the following main files:

- **index.js**: The main file responsible for initializing the Express framework, importing dependencies such as bodyParser, and defining various routes for the API.
- **routes/users.js**: Contains the route handlers for user-related operations.
- **controllers/users.js**: Implements the logic for user operations, such as fetching user data, adding new users, deleting users, and updating user details.

## Usage

To interact with the API and perform CRUD operations on users, you can follow the instructions below:

1. Open your preferred HTTP request application, such as Postman.
2. Access the API homepage at [https://simplerestfulregistryapi.herokuapp.com/](https://simplerestfulregistryapi.herokuapp.com/).
3. Use the provided routes and HTTP methods to perform the desired operations:
   - Use **GET** on /users to retrieve all users.
   - Use **POST** on /users to create a new user by providing the user details in JSON format.
   - Use **GET** on /users/:id to retrieve user details by their unique ID.
   - Use **DELETE** on /users/:id to delete a user by their ID.
   - Use **PATCH** on /users/:id to update or replace a user's details by their ID.

## Screenshots

Here are some screenshots demonstrating the usage of the API:

![Figure 1: GET command for fetching the Homepage](/screenshots/homepage_get.png)

![Figure 2: GET command for fetching the list of Users](/screenshots/users_get.png)

![Figure 3: Adding a User through POST with JSON format](/screenshots/user_post.png)

![Figure 4: Confirmation message for successful user addition](/screenshots/user_added.png)

![Figure 5: Viewing the updated Users list with GET](/screenshots/users_get_updated.png)

![Figure 6: Normal users displayed in the API](/screenshots/normal_users.png)

![Figure 7: Updating user credentials with PATCH](/screenshots/user_patch.png)

## License

This project is licensed under the [MIT License](LICENSE).

---

We hope you find this API implementation and its usage instructions helpful. If you have any questions or feedback, please feel free to reach out. Enjoy exploring and working with the RESTful API!
