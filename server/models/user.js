'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
   User.hasMany(models.Post, {
     foriegnKey: 'userId',
     as: 'posts',
     onDelete: 'CASCADE',
   });

   User.hasMany(models.Comment, {
     foriegnKey: 'userId',
     as: 'comments',
     onDelete: 'CASCADE',
   })
  };
  return User;
};