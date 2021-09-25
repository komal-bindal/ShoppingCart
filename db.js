const Sequelize = require("sequelize");
const db = new Sequelize("shopdb", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    min: 0,
    max: 5,
  },
});

const User = db.define("users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Product = db.define("products", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  manufacturer: Sequelize.STRING,
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    defaultValue: 0.0,
  },
});

//to ensure sync with database or to ensure database is created
db.sync()
  .then(() => {
    console.log("database synced");
  })
  .catch(() => {
    console.error("erroor in creating database");
  });

exports = module.exports = {
  User,
  Product,
};
