
# User Management API

This is a Node.js API for managing users. It handles the creation, retrieval, updating, and deletion of user data in a MongoDB database.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Dependencies](#dependencies)
- [License](#license)

## Installation

To run this API locally or in your server, you need to follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/user-management-api.git

2. Clone the repository:

   ```bash
   cd user-management-api

3. Clone the repository:

   ```bash
   npm install

4. Configure the MongoDB database:
- Make sure you have MongoDB installed and running.
- Modify the database connection settings in the code to match your MongoDB setup.


5. Start the API:

   ```bash
   npm start

The API should now be running and accessible at http://localhost:yourport.

## Usage

To use this API, you can make HTTP requests to the provided endpoints. Below are the available endpoints and their functionalities.

## Endpoints
The API provides the following endpoints:

- GET /: Retrieves all users.
- GET /:userId: Retrieves a single user by their ID.
- GET /check/:userId: Checks if a user with the specified ID exists.
- POST /: Creates a new user.
- PATCH /:userId: Updates an existing user.
- DELETE /:userId: Deletes a user by their ID.

#### Request and response formats
The API expects all requests to be in JSON format. The responses will also be in JSON format.

**Example request & response:**

Request:

    {
        "email": "example@example.com",
        "passWd": "password123",
        "firstName": "John",
        "lastName": "Doe",
        "address": "123 Main Street",
        "phoneNo": "555-123-4567",
        "userRole": "user"
      }

      
Response:

      {
        "_id": "5f8a61a63e1d7b3654d16f1a",
        "email": "example@example.com",
        "passWd": "password123",
        "firstName": "John",
        "lastName": "Doe",
        "address": "123 Main Street",
        "phoneNo": "555-123-4567",
        "userRole": "user"
      }

   
## Dependencies

- Express.js: A fast and minimalist web framework for Node.js.
- MongoDB: A NoSQL database for storing user data.
- Mongoose: An ODM (Object Data Modeling) library for MongoDB.
- Other dependencies as specified in the package.json file.


## License

This project is licensed under the MIT License.
