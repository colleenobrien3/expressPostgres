# Refactored Cruelty-free Cosmetics API, NOW WITH NODE.JS AND EXPRESS

## Description

Before this project, I had only used PostgreSQL with Python apps (P for Postgres, P for Python, right?) Once I heard that a JavaScript app can be configured to work with Postgres just as easily as a Python app, I was curious to see how that worked. So, I created this project in which I use Node.js and Express along with a PostgreSQL database to rebuild a cruelty-free cosmetics API I originally created with Python's Django framework. This project actually fetches it's data on cruelty-free cosmetics straight from my previous API.

I followed [this tutorial](https://www.robinwieruch.de/postgres-express-setup-tutorial) for much of the setup, although ended up having to make quite a few changes. That being said, please ignore the code that handles the 'message' and 'user' routes and models, etc., as these were just for practice through the tutorial! The only relevant and fully functioning route is for the /brands path of the API, which gives the list of cruelty-free cosmetics brands.

To see the repo and deployed app for my original API, please follow these links:

[API Repo](https://github.com/colleenobrien3/makeupupi)
[Deployed API](https://arcane-brook-10088.herokuapp.com/companies)

I also built a frontend with the JavaScript React framework that allows users to search the API to see whether a brand is cruelty-free before purchasing. Please see the following links:

[Frontend Repo](https://github.com/colleenobrien3/react_cruelty_free)
[Deployed Frontend](https://hilight.netlify.app/)

## Languages and Technologies

- JavaScript
- Node.js
- Express.js
- PostgreSQL
- Sequelize

## Getting Started

Click [here](https://gentle-falls-38875.herokuapp.com/brands) to view the deployed API.

## Dependencies

In order to setup the API and database locally, you will need the following installed on your machine:

- ['node'](https://nodejs.org/en/download/))
- ['npm'](https://www.npmjs.com/get-npm)
- ['postgresql'](https://www.postgresql.org/docs/9.3/tutorial-install.html)

## Setup and Installation

1. Clone this repository.

In your command line, enter:

```
git clone https://github.com/colleenobrien3/expressPostgres.git
```

2. Enter cloned repository.

3. Run the command `npm install` to install the dependencies in the package.json.

4. To quickly create a local Postgres database with that matches the app's configuration, you must first enter the psql shell with the command:

`psql`

5. Run the following commands to actually create the database:
   `CREATE DATABASE expresspostgres; CREATE USER coll WITH PASSWORD 'coll'; GRANT ALL PRIVELEGES ON DATABASE expresspostgres TO coll;`

6. To start the server and seed the data into your local database, run:

```
npm start
```

## Database Setup

## API Paths

| Method |  Path   | Description         |
| ------ | :-----: | ------------------- |
| GET    | /brands | Retrieves companies |

## Next Steps

Please click [here](https://hilight.netlify.app/) to view the deployed frontend, and [here](https://github.com/colleenobrien3/react_cruelty_free) to view the frontend repo.
