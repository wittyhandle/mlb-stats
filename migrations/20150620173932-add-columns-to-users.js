'use strict';
Promise = require('bluebird');

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.addColumn('users', 'firstName', {allowNull: false, type: Sequelize.STRING})
      .then(function() {
        var updateFirstName = 'update users set firstName="Jack" where username = "admin"';
        return queryInterface.sequelize.query(updateFirstName);
      })
      .then(function() {
        return queryInterface.addColumn('users', 'lastName', {allowNull: false, type: Sequelize.STRING});
      })
      .then(function() {
        var updateLastName = 'update users set lastName="Shaftoe" where username = "admin"';
        return queryInterface.sequelize.query(updateLastName);
      });
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.removeColumn('users', 'firstName'),
      queryInterface.removeColumn('users', 'lastName')
    ];
  }
};
