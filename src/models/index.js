import Sequelize from "sequelize";
let sequelize;

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    protocol: "postgres",
    logging: true, //false
  });
} else {
  sequelize = new Sequelize("expresspostgres", "coll", "coll", {
    dialect: "postgres",
  });
}

const fs = require("fs");
const path = require("path");
const models = {
  User: require(path.join(__dirname, "/user.js"))(sequelize, Sequelize),
  Message: require(path.join(__dirname, "/message.js"))(sequelize, Sequelize),
  Cfbrand: require(path.join(__dirname, "/cfbrand.js"))(sequelize, Sequelize),
};

console.log(models);

Object.keys(models).forEach((key) => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
