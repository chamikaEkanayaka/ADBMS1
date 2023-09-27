
# Order Management API

This is a Node.js API for managing orders. It handles the creation, retrieval, updating, and deletion of orders in a PostgreSQL database. The API also interacts with other microservices to check product availability and user existence before processing orders.

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
   git clone https://github.com/yourusername/order-management-api.git

2. Clone the repository:

   ```bash
   cd order-management-api


3. Clone the repository:

   ```bash
   npm install

4. Configure the PostgreSQL database:
- Make sure you have PostgreSQL installed and running.
- Modify the database connection settings in the code (in the pool variable) to match your PostgreSQL setup.

5. Start the API:

   ```bash
   npm start

The API should now be running and accessible at http://localhost:yourport.

## Usage

To use this API, you can make HTTP requests to the provided endpoints. Below are the available endpoints and their functionalities.

## Endpoints
The API provides the following endpoints:

- POST /: Creates a new order.
- GET /: Retrieves all orders.
- GET /:orderId: Retrieves a single order by its ID.
- PATCH /:orderId: Updates an existing order.
- DELETE /:orderId: Deletes an order.

#### Request and response formats
The API expects all requests to be in JSON format. The responses will also be in JSON format.

**Example request & response:**

    ```bash
    {
      "user_id": 1,
      "product_id": 2,
      "quantity": 3,
      "total_price": 100,
      "order_status": "pending",
      "shipping_address": "123 Main Street",
      "payment_status": "paid"
    }
 
## Dependencies

- Express.js: A fast and minimalist web framework for Node.js.
- PostgreSQL: A powerful, open-source relational database.
- Axios: A promise-based HTTP client for making requests to other microservices.
- Other dependencies as specified in the package.json file.


## License

This project is licensed under the MIT License.
