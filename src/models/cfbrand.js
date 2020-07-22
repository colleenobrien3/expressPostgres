const cfbrand = (sequelize, DataTypes) => {
  const Cfbrand = sequelize.define("Cfbrand", {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
  return Cfbrand;
};
module.exports = cfbrand;
