'use strict';
const bcrypt = require('bcrypt');
const saltRounds = 10;

const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/util');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Todo)
    }

    async authenticate(password){
      const match = await bcrypt.compare(password, this.password);
      return match
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  // Implement Hooks For Hashing Password
  User.beforeCreate(async (user, options) => {
    const hashedPassword = hashPassword(user.password);
    user.password = hashedPassword;
  });

  User.beforeUpdate(async (user, options) => {
    const hashedPassword = bcrypt.hashSync(user.password, saltRounds);
    user.password = hashedPassword;
  });
  return User;
};