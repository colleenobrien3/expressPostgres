// let users = {
//   1: {
//     id: "1",
//     username: "Robin Wieruch",
//   },
//   2: {
//     id: "2",
//     username: "Dave Davids",
//   },
// };

// let messages = {
//   1: {
//     id: "1",
//     text: "Hello World",
//     userId: "1",
//   },
//   2: {
//     id: "2",
//     text: "By World",
//     userId: "2",
//   },
// };

// export default {
//   users,
//   messages,
// };

import "dotenv/config";
import Sequelize from "sequelize";

const sequelize = new Sequelize("expresspostgres", "coll", "coll", {
  dialect: "postgres",
});

// var models = [];

// const fs = require("fs");
// const path = require("path");
// fs.readdirSync(__dirname).forEach((file) => {
//   //const model = sequelize.import(path.join('./models', file));
//   if (file != "./index.js") {
//     var model = require(path.join(__dirname, file));
//     sequelize, Sequelize;
//     sequelize[model.name] = model;
//     models.push(model);
//     console.log(models);
//   }
// });

const fs = require("fs");
const path = require("path");
const models = {
  User: require(path.join(__dirname, "/user.js"))(sequelize, Sequelize),
  Message: require(path.join(__dirname, "/message.js"))(sequelize, Sequelize),
  Cfbrand: require(path.join(__dirname, "/cfbrand.js"))(sequelize, Sequelize),
};

// console.log(models);

// const message = (sequelize, DataTypes) => {
//   const Message = sequelize.define("message", {
//     text: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//       },
//     },
//   });

//   Message.associate = (models) => {
//     Message.belongsTo(models.User);
//   };

//   return Message;
// };

// const user = (sequelize, DataTypes) => {
//   const User = sequelize.define("user", {
//     username: {
//       type: DataTypes.STRING,
//       unique: true,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//       },
//     },
//   });
//   User.associate = (models) => {
//     User.hasMany(models.Message, { onDelete: "CASCADE" });
//   };
//   User.findByLogin = async (login) => {
//     let user = await User.findOne({
//       where: { username: login },
//     });

//     if (!user) {
//       user = await User.findOne({
//         where: { email: login },
//       });
//     }

//     return user;
//   };
//   return User;
// };

// const models = {
//   User: user,
//   Message: message,
// };

console.log(models);

Object.keys(models).forEach((key) => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
