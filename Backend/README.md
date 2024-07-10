# MyJournalApp Backend

This is the backend for the MyJournalApp project. It is built with Node.ts, node/express and MySQL.

## Features

- **User Authentication**: Sign up and log in.
- **Journal Entry Management**: Add, edit, and delete journal entries with title, content, category, and date.
- **Journal View**: View a list of all journal entries.
- **Categorization**: Categorize entries (e.g., Personal, Work, Travel).
- **Summary View**: Display journal entries over a selected period (daily, weekly, monthly).
- **Settings**: Update username and password.

## Prerequisites

- Node.js (v14 or higher)
- MySQL
- Docker (optional)
- Postman

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/Backend
cd Backend
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Set Up MySQL Database

- Create a new database in MySQL.
- Create a `.env` file in the root directory of the project.
- Add the following environment variables to the `.env` file:

  ```sh
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=password
    DB_NAME=database_name
  ```

### 3.1.0 Set Up MySQL Database Using Docker
- In my case I used Docker to create and host the database.
- Make sure you have Docker installed on your machine and its running.
- In the `.src/utils/database.ts` file, update the `sequelize` constant with the URL of the MySQL database.
- Then Jump to step 5.1

### 4. Run Migrations
    
    ```sh
    npm run migrate
    ```

### 5. Start the Server
    
    ```sh
    npm start
    ```

### 5.1. Start the Server Using Docker
- In my case I used Docker to create a MySQL container. Here are the steps to run the project with Docker:
- Make sure you have Docker installed on your machine and its running.
- Run the following command to start the App with Docker:

  ```sh
   docker-compose up --build  
  ```

## Built With

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/)
- [JWT](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Sequelize](https://sequelize.org/)
- [Morgan](https://www.npmjs.com/package/morgan)


# MCS ARCHITECTURE Boiler Plate

## MODEL-CONTROLLER-SERVICE ARCHITECTURE

## Project Structure

```
src\
    |--config\         # Environment variables and configuration related things
    |--constants\      # All constant variables
    |--controllers\    # Route controllers (controller layer)
    |--middlewares\    # Custom express middlewares
    |--models\         # Mongoose models (data layer)
    |--routes\         # Routes
    |--services\       # Business logic (service layer)
    |--utils\          # Utility classes and functions
    |--index.ts        # App entry point
```

## Environment Variables

The following environment variables are required:

- `PORT`: The port number for the server.
- `DB_HOST`: The host for the MySQL database.
- `DB_USER`: The username for the MySQL database.
- `DB_PASSWORD`: The password for the MySQL database.
- `DB_NAME`: The name of the MySQL database.

## API Endpoints

- `/auth/register`: POST - Register a new user.
- `/auth/login`: POST - Login an existing user.

- `/journals`: POST - Create a new journal entry.
- `/journals`: GET - Get all journal entries.
- `/journals/:id`: GET - Get a journal entry by ID.
- `/journals/summary`: GET - Get journal entries over a selected period.
- `/journals/category/:category`: GET - Get journal entries by category.
- `/journals/:id`: PUT - Update a journal entry by ID.
- `/journals/delete/:id`: DELETE - Delete a journal entry by ID.


## License

Distributed under the MIT License. See `LICENSE` for more information.

