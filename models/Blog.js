const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Blog extends Model { }

Blog.init(
  {
    blog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    blog_title: {
      type: DataTypes.TEXT('long'),
      allowNull: false
    },
    blog_body: {
      type: DataTypes.TEXT('long'),
      allowNull: false
    },
    blog_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    active_ind: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'user_id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
  }
);

module.exports = Blog;